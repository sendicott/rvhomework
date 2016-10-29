let app = angular.module('WalletApp', []);

app.controller("WalletController", function ($scope, WalletService) {
    // $scope.cardArray = [
    //     {
    //         icon: "fa-cc-visa",
    //         number: "**** **** **** 2562",
    //         valid: "12/17",
    //         click: "Visa",
    //     },
    //     {
    //         icon: "fa-cc-amex",
    //         number: "**** ****** 21001",
    //         valid: "07/19",
    //         click: "Amex",
    //     },
    //     {
    //         icon: "fa-cc-mastercard",
    //         number: "**** **** **** 8335",
    //         valid: "09/17",
    //         click: "Master",
    //     },
    // ];

    $scope.findVisa = function() {
        $scope.transactionArray = "";
        $scope.transactionArray = WalletService.getVisa();
    }

    $scope.findAmex = function() {
        $scope.transactionArray = "";
        $scope.transactionArray = WalletService.getAmex();
    }

    $scope.findMaster = function() {
        $scope.transactionArray = "";
        $scope.transactionArray = WalletService.getMaster();
    }
    
    // $scope.transactionArray = WalletService.getMaster();
});

app.factory("WalletService", function() {
    let transactionArray = [
        {
            card: "amex",
            divClass: "loss",
            operator: "-",
            title: "Smoothie Budget",
            category: "Health & Fitness",
            number: "#453551",
            date: "11 July, 2016",
            cost: "$184.67",
        },
        {
            card: "master",
            divClass: "loss",
            operator: "-",
            title: "Electric Bill",
            category: "Utilities",
            number: "#24562",
            date: "3 August, 2016",
            cost: "$68.33",
        },
        {
            card: "master",
            divClass: "gain",
            operator: "+",
            title: "Dog Walking",
            category: "Odd Jobs",
            number: "#4761",
            date: "3 December, 2016",
            cost: "$75.00",
        },
        {
            card: "visa",
            divClass: "gain",
            operator: "+",
            title: "Sold Wishbone book collection",
            category: "Miscellaneous",
            number: "#152",
            date: "11 January, 2016",
            cost: "$700.00",
        },
        {
            card: "visa",
            divClass: "loss",
            operator: "-",
            title: "Gatorade: 10 for $10",
            category: "Groceries",
            number: "#153",
            date: "14 February, 2016",
            cost: "$10.70",
        },
    ];

    return {
        getVisa: function () {
            let visaArray = [];
            for (let i = 0; i < transactionArray.length; i++) {
                if (transactionArray[i].card === "visa") {
                    visaArray.push(transactionArray[i]);
                }
            }
            return visaArray;
        },

        getMaster: function () {
            let masterArray = [];
            for (let i = 0; i < transactionArray.length; i++) {
                if (transactionArray[i].card === "master") {
                    masterArray.push(transactionArray[i]);
                }
            }
            return masterArray;
        },

        getAmex: function () {
            let amexArray = [];
            for (let i = 0; i < transactionArray.length; i++) {
                if (transactionArray[i].card === "amex") {
                    amexArray.push(transactionArray[i]);
                }
            }
            return amexArray;
        },
    }
});