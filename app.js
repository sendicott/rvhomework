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
        $scope.balance = "";
        $scope.transactionArray = WalletService.getVisa();
        let amount = 0;
        let limitedArray = WalletService.getVisa();
        for (let i = 0; i < limitedArray.length; i++) {
            if (limitedArray[i].divClass === "gain") {
                amount = amount + parseFloat(limitedArray[i].cost);     
            } else {
                amount = amount - parseFloat(limitedArray[i].cost);
            }
        }
        $scope.balance = amount.toFixed(2);
    }

    $scope.findAmex = function() {
        $scope.transactionArray = "";
        $scope.balance = "";
        $scope.transactionArray = WalletService.getAmex();
        let amount = 0;
        let limitedArray = WalletService.getAmex();
        for (let i = 0; i < limitedArray.length; i++) {
            if (limitedArray[i].divClass === "gain") {
                amount = amount + parseFloat(limitedArray[i].cost);     
            } else {
                amount = amount - parseFloat(limitedArray[i].cost);
            }
        }
        $scope.balance = amount.toFixed(2);
    }

    $scope.findMaster = function() {
        $scope.transactionArray = "";
        $scope.balance = "";
        $scope.transactionArray = WalletService.getMaster();
        let amount = 0.00;
        let limitedArray = WalletService.getMaster();
        for (let i = 0; i < limitedArray.length; i++) {
            if (limitedArray[i].divClass === "gain") {
                amount = amount + parseFloat(limitedArray[i].cost);     
            } else {
                amount = amount - parseFloat(limitedArray[i].cost);
            }
        }
        $scope.balance = amount.toFixed(2);
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
            cost: "184.67",
        },
        {
            card: "amex",
            divClass: "gain",
            operator: "+",
            title: "First place in unicycle triathlon",
            category: "Health & Fitness",
            number: "#56102",
            date: "11 December, 2016",
            cost: "1111.11",
        },
        {
            card: "amex",
            divClass: "loss",
            operator: "-",
            title: "10 lbs. of pig ears",
            category: "Petcare",
            number: "#45290",
            date: "11 June, 2016",
            cost: "341.87",
        },
        {
            card: "master",
            divClass: "loss",
            operator: "-",
            title: "Electric Bill",
            category: "Utilities",
            number: "#24562",
            date: "3 August, 2016",
            cost: "68.33",
        },
        {
            card: "master",
            divClass: "gain",
            operator: "+",
            title: "Dog Walking",
            category: "Odd Jobs",
            number: "#4761",
            date: "3 December, 2016",
            cost: "75.00",
        },
        {
            card: "visa",
            divClass: "gain",
            operator: "+",
            title: "Sold Wishbone book collection",
            category: "Miscellaneous",
            number: "#152",
            date: "11 January, 2016",
            cost: "700.00",
        },
        {
            card: "visa",
            divClass: "loss",
            operator: "-",
            title: "Gatorade: 10 for $10",
            category: "Groceries",
            number: "#153",
            date: "14 February, 2016",
            cost: "10.70",
        },
        {
            card: "visa",
            divClass: "gain",
            operator: "+",
            title: "Brought home the bi-weekly bacon",
            category: "Salary",
            number: "#43156",
            date: "14 March, 2016",
            cost: "1500.00",
        },
        {
            card: "visa",
            divClass: "gain",
            operator: "+",
            title: "Bi-weekly bacon again",
            category: "Salary",
            number: "#43157",
            date: "28 March, 2016",
            cost: "1500.00",
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