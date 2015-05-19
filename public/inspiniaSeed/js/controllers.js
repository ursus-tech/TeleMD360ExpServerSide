/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $log, $interval, uiGridConstants, $resource, $http, clientsFactory) {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

    $scope.options = [{ name: "a", id: 1 }, { name: "b", id: 2 }];
    $scope.selectedOption = $scope.options[1];
    $log.debug($scope.selectedOption);


    //gridSubGRid($scope);  //creates the grid with subgrid - in patient details
    //$scope.clientForm = {};
    //$scope.clientForm.fname = "Jakob";
    //$scope.clientForm.lname  = "Jenkov";
    $scope.client = {};


    $log.debug("DEBUG IS WORKING");

    $scope.testname = "MAHIMA"
    $scope.testfield = "MAHIMA"
    //myFactoryFunction($scope, $http, $log);



    clientsUiGrid($scope, $log, $interval, uiGridConstants, $http, clientsFactory);

    clientDetailsGridSubGrid($scope, $log,  $interval, uiGridConstants);



    $scope.languageTypes = [
        { id:1,  value:'Arabic'},
        { id:2,  value:'Bengali'},
        { id:3,  value:'Chinese'},
        { id:4,  value:'English'},
        { id:5,  value:'French'},
        { id:6,  value:'German'},
        { id:7,  value:'Greek'},
        { id:8,  value:'Hindu'},
        { id:9,  value:'Italian'},
        { id:10,  value:'Japanese'},
        { id:11,  value:'Latin'},
        { id:12,  value:'Portuguese'},
        { id:13,  value:'Russian'},
        { id:14,  value:'Spanish'}

    ];

    this.bodyTypes = [
        'Large',
        'Medium',
        'Small'
    ];

    $scope.genderTypes = [
        { id:1, value:'Male'},
        { id:2, value:'Female'},
        { id:3, value:'Other'},
        { id:4, value:'Unavailable'}

    ];

    $scope.genderTypes3 = [
        {value:'Male'},
        {value:'Female'},
        {value:'Other'},
        {value:'Unavailable'}
    ];

    $scope.genderTypes4 = [
        'Male',
        'Female',
        'Other',
        'Unavailable'

    ];

    $scope.morbidConditionTypes = [
        { id:1, value:'Asthmatic'},
        { id:2, value:'CAD'},
        { id:3, value:'Congestive Heart Failure'},
        { id:4, value:'COPD'},
        { id:5, value:'Diabetes'},
        { id:6, value:'Diabetes Type 1'},
        { id:7, value:'Diabetes Type 2'},
        { id:8, value:'Eval'},
        { id:9, value:'Gestatioanal Diabetes'},
        { id:10, value:'Heart Failure'},
        { id:11, value:'Hypertension'},
        { id:12, value:'Major Depressive Disorder'},
        { id:13, value:'None'},
        { id:14, value:'Other'},
        { id:15, value:'Pre Diabetes'},
        { id:16, value:'Respiratory Failure'},
        { id:17, value:'Trach'},
        { id:18, value:'Unspecified'}
    ];




    $scope.timezoneTypes = [
        { id:1, value:'Alaska Standard Time'},
        { id:2, value:'Central Standard Time'},
        { id:3, value:'Eastern Standard Time'},
        { id:4, value:'Hawaii Standard Time'},
        { id:5, value:'Mountain Standard Time'},
        { id:6, value:'Pacific Standard Time'}
    ];

    $scope.phonenumberTypes = [
        { id:1, value:'Business'},
        { id:2, value:'Emergency'},
        { id:3, value:'Fax'},
        { id:4, value:'Home'},
        { id:5, value:'IVR'},
        { id:6, value:'Mobile'},
        { id:7, value:'Triage'},
        { id:8, value:'Warranty'}
    ];

    $scope.emailaddressTypes = [
        { id:1, value:'Business'},
        { id:2, value:'Mobile Phone'},
        { id:3, value:'Personal'},
        { id:4, value:'Warranty'}
    ];

    /*
    $scope.update = function(client) {
        $scope.orgClient = angular.copy($scope.client);
        $log.log("^^^^^^^^^^^^^^^^^");
        $log.log($scope.client.fname);
        $log.log(clientForm.fname.value);

        //$scope.client.fname = form.cfname.value;

    }; */

    $scope.reset = function(form) {
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        //$scope.client = angular.copy($scope.master);
        $scope.client = {};

    };

    $scope.saveNewClient = function(client) {

        $scope.orgClient = angular.copy($scope.client);

        var fname = $scope.client.fname || "";
        var gender = "";
        if (typeof $scope.client.selectedGender === 'undefined')  { gender = ""} else { gender = $scope.client.selectedGender.value};

        var language = "";
        if (typeof $scope.client.selectedLanguage === 'undefined')  { language = ""} else { language = $scope.client.selectedLanguage.value};

        var phonenumber = "";
        if (typeof  $scope.client.phonenumber === 'undefined')  { phonenumber = ""} else { phonenumber =  $scope.client.phonenumber.value};

        var morbidConditions = "";
        if (typeof  $scope.client.selectedMorbidCondition === 'undefined')  { morbidConditions = ""} else { morbidConditions =  $scope.client.selectedMorbidCondition.value};

        var coMorbidConditions = "[";

        if (typeof  $scope.client.selectedcoMorbidConditions !== 'undefined')  {
            for (var i = 0; i < $scope.client.selectedcoMorbidConditions.length; i++) {
                coMorbidConditions += $scope.client.selectedcoMorbidConditions[i].value + ", ";
            }
        }
        coMorbidConditions += "]";

        var results = fname + " " +  gender + " " + language + " " + morbidConditions + " " + coMorbidConditions;
        alert('results = ' + results);
    }


    $scope.phoneNumberAccounts = [

    ];

    $scope.addPhoneNumberAccounts = function () {
        $log.log("In addPhoneNumberAccounts");
        $log.log($scope.client.phonenumber);

        $scope.phoneNumberAccounts.push(
            {   phonenumber: $scope.client.phonenumber,
                type: $scope.client.selectedPhoneNumberType.value
            });
    };



    $scope.emailAccounts = [

    ];

    $scope.addEmailAccounts = function () {
        $scope.emailAccounts.push(
            {   address: $scope.client.emailaddress,
                type: $scope.client.selectedEmailAddressType.value
            });
    };




};





function findIndex($scope, $log, typesList, selectedOption){
    $log.debug("&&&&&&&>");
    var ind = -1;
    for	(index = 0; index < typesList.length; index++) {
        $log.debug(typesList[index].value.toUpperCase() + "==" + selectedOption.toUpperCase());
        if ( typesList[index].value.toUpperCase() == selectedOption.toUpperCase() ) {
            ind = index;
            $log.debug("----->" + ind);
            break;
        }
    }

    return ind;
}

function copyClientData($scope, record, $log) {
    const notProvided = "NOT PROVIDED by server";
    const defaultDate = "01-01-1900";

    $log.debug(record);

    $scope.client.fname = record.firstName || notProvided;
    $scope.client.mname = record.middleName || notProvided;
    $scope.client.lname = record.lastName || notProvided;
    $scope.client.height = record.height || notProvided;
    $scope.client.weight = record.weight || notProvided;
    $scope.client.dob = record.dob || notProvided;
    $scope.client.ssn = record.ssn || notProvided;
    $scope.client.clientid = record.clientIdentifier || notProvided;
    $scope.client.languageType = record.language;
    $scope.client.genderType = record.gender;
    $scope.client.morbidConditionType = record.primaryMorbidCondition;
    $scope.client.coMorbidConditionTypes = record.coMorbidConditions;
    $scope.client.timezoneType = record.timezone;
    $scope.client.ivrPin =  record.IVRPin;
    $scope.client.timerTimeout = record.timerTimeout;
    $scope.client.noReadingThreshold  = record.noReadingThreshold;
    $scope.client.phonenumberType = record.phone || 'Mobile';
    $scope.client.emailaddressType = record.email || 'Personal';

    //check if the date is a valid date; if so convert to date format; if not assign default date
    if ( ($scope.client.dob !== 'undefined') ) {
        $scope.client.dob = new Date($scope.client.dob);
        if (!(angular.isDate($scope.client.dob))) {
            $scope.client.dob = new Date(defaultDate);
        }
    }

    //populate the phone numbers already stored in the server-side database
    for	(index = 0; index < record.phoneNumbers.length; index++) {
        $scope.phoneNumberAccounts.push(
            {   phonenumber: record.phoneNumbers[index].subscriberNumber,
                type: record.phoneNumbers[index].type
            });
    }

    //populate the email addresses already stored in the server-side database
    for	(index = 0; index < record.emailAddresses.length; index++) {
        $scope.emailAccounts.push(
            {   address: record.emailAddresses[index].email,
                type: record.emailAddresses[index].type
            });
    }


    $log.debug("selectedLanguage = " + $scope.client.languageType.toString());
    $log.debug("LanguageList = ");
    $log.debug($scope.languageTypes);
    var selectedLanguageInd = findIndex($scope, $log, $scope.languageTypes, $scope.client.languageType);
    $scope.client.selectedLanguage =  $scope.languageTypes[selectedLanguageInd];

    $log.debug("selectedGender = " + $scope.client.genderType.toString());
    $log.debug("GenderList = ");
    $log.debug($scope.genderTypes);
    var selectedGenderInd = findIndex($scope, $log, $scope.genderTypes, $scope.client.genderType);
    $scope.client.selectedGender =  $scope.genderTypes[selectedGenderInd];

    $log.debug("selectedMorbidCondition = " + $scope.client.morbidConditionType.toString());
    $log.debug("MorbidConditionsList = ");
    $log.debug($scope.morbidConditionTypes);
    var selectedMorbidConditionInd = findIndex($scope, $log, $scope.morbidConditionTypes, $scope.client.morbidConditionType);
    $scope.client.selectedMorbidCondition =  $scope.morbidConditionTypes[selectedMorbidConditionInd];

    $scope.client.selectedcoMorbidConditions = [];
    $log.debug("selectedCoMorbidConditions needs to include: " + $scope.client.coMorbidConditionTypes);
    for (var index in $scope.client.coMorbidConditionTypes) {
        $log.debug("The index be: " + index);
        $log.debug("Looking for coMorbid Condition: " + $scope.client.coMorbidConditionTypes[index]);
        var selectedcoMorbidConditionInd = findIndex($scope, $log, $scope.morbidConditionTypes, $scope.client.coMorbidConditionTypes[index]);
        $log.debug("The index found was " + selectedcoMorbidConditionInd);
        $scope.client.selectedcoMorbidConditions.push( $scope.morbidConditionTypes[selectedcoMorbidConditionInd] );
    }

    $log.debug("The selected list  " + $scope.client.selectedcoMorbidConditions);

    $log.debug("selectedTimezone = " + $scope.client.timezoneType.toString());
    $log.debug("TimezoneList = ");
    $log.debug($scope.timezoneTypes);
    var selectedTimezoneInd = findIndex($scope, $log, $scope.timezoneTypes, $scope.client.timezoneType);
    $scope.client.selectedTimezone =  $scope.timezoneTypes[selectedTimezoneInd];

    $log.debug("selectedPhoneTypes = " + $scope.client.phonenumberType.toString());
    $log.debug("PhoneNumberTypeList = ");
    $log.debug($scope.phonenumberTypes);
    var selectedPhoneNumberInd = findIndex($scope, $log, $scope.phonenumberTypes, $scope.client.phonenumberType);
    $scope.client.selectedPhoneNumberType =  $scope.phonenumberTypes[selectedPhoneNumberInd];

    $log.debug("selectedEmailAddressTypes = " + $scope.client.emailaddressType.toString());
    $log.debug("EmailAddressTypeList = ");
    $log.debug($scope.emailaddressTypes);
    var selectedEmailAddressTypeInd = findIndex($scope, $log, $scope.emailaddressTypes, $scope.client.emailaddressType);
    $scope.client.selectedEmailAddressType =  $scope.emailaddressTypes[selectedEmailAddressTypeInd];


}




/*
function myFactoryFunction($scope, $http, $log) {
    //$http.get('http://localhost:4000/singleUser').
    $http.get('http://localhost:4000/clients').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.testname = data; //try data.name for key/value
            $log.debug(data);
            //$log.debug(data[0].firstName);
            //$log.debug(data[1].firstName);
            //$log.debug(data[2]);

            copyClientData($scope, data[0], $log);
            //var jsonData = JSON.parse(data);

        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            $scope.testname = "ERROR";
        });
}
*/


/*$scope.myData = [
 {
 "date":"03-25-2015",
 "firstName": "Cox",
 "lastName": "Carney",
 "company": "Enormo",
 "employed": true,
 "age": 45
 },
 {
 "date":"03-26-2015",
 "firstName": "Lorraine",
 "lastName": "Wise",
 "company": "Comveyer",
 "employed": false,
 "age": 35
 },
 {
 "date":"03-27-2015",
 "firstName": "Nancy",
 "lastName": "Waters",
 "company": "Fuelton",
 "employed": false,
 "age": 25
 }
 ];*/

var highlightCellChild = function highlightCellChild(grid, row, col, rowRenderIndex, colRenderIndex) {
    //{($scope.myData[0].components[rowRenderIndex].metric === 'Systolic')) {

    /*$log.debug(row);
     $log.debug(col);

     $log.debug(rowRenderIndex);
     $log.debug(colRenderIndex);*/

    //$log.debug(colRenderIndex);

    if ((grid.getCellValue(row, col) >= 145) && (row.entity.metric === "Systolic")) {
        return 'selected';
    }
    else if ((grid.getCellValue(row, col) >= 90) && (row.entity.metric=== "Diastolic")) {
        return 'selected';
    }

    //&& ($scope.myData[0].components[rowRenderIndex].metric === 'Diastolic')

};

function addSubGridComponents($scope, someData){
    for( i = 0; i < someData.length; i++){
        someData[i].subGridOptions = {
            headerTemplate: './templates/header-template.html',

            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            columnDefs: [
                //{field: "metric", displayName: $scope.myDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
                {field: 'metric', displayName: $scope.clientDetailsDataHeaders[0].metric, cellClass:highlightCellChild, cellTooltip:true, enableColumnMoving:false},
                {field: "data01", displayName: $scope.clientDetailsDataHeaders[0].data01, cellClass:highlightCellChild},
                {field: "data02", displayName: $scope.clientDetailsDataHeaders[0].data02, cellClass:highlightCellChild},
                {field: "data03", displayName: $scope.clientDetailsDataHeaders[0].data03, cellClass:highlightCellChild},
                {field: "data04", displayName: $scope.clientDetailsDataHeaders[0].data04, cellClass:highlightCellChild},
                {field: "data05", displayName: $scope.clientDetailsDataHeaders[0].data05, cellClass:highlightCellChild},
                {field: "data06", displayName: $scope.clientDetailsDataHeaders[0].data06, cellClass:highlightCellChild},
                {field: "data07", displayName: $scope.clientDetailsDataHeaders[0].data07, cellClass:highlightCellChild},
                {field: "data08", displayName: $scope.clientDetailsDataHeaders[0].data08, cellClass:highlightCellChild},
                {field: "data09", displayName: $scope.clientDetailsDataHeaders[0].data09, cellClass:highlightCellChild},
                {field: "data10", displayName: $scope.clientDetailsDataHeaders[0].data10, cellClass:highlightCellChild},
                {field: "data11", displayName: $scope.clientDetailsDataHeaders[0].data11, cellClass:highlightCellChild},
                {field: "data12", displayName: $scope.clientDetailsDataHeaders[0].data12, cellClass:highlightCellChild}
            ],
            data: someData[i].components
        }
    }

    return someData;
}


function clientDetailsGridSubGrid($scope, $log,  $interval, uiGridConstants) {
    $scope.clientDetailsDataHeaders = [
        {
            "metric": "READING",
            "data01": "3/1/2015",
            "data02": "3/2/2015",
            "data03": "3/3/2015",
            "data04": "3/4/2015",
            "data05": "3/5/2015",
            "data06": "3/6/2015",
            "data07": "3/7/2015",
            "data08": "3/8/2015",
            "data09": "3/9/2015",
            "data10": "3/10/2015",
            "data11": "3/11/2015",
            "data12": "3/12/2015",
            "call": "Action"
        }
    ];


    $scope.clientDetailsData = [
        {
            "metric": "BP",
            "data01": "123/90",
            "data02": "112/99",
            "data03": "113/45",
            "data04": "145/111",
            "data05": "156/23",
            "data06": "178/78",
            "data07": "145/98",
            "data08": "178/111",
            "data09": "197/111",
            "data10": "134/123",
            "data11": "123/124",
            "data12": "132/90",
            components : [
                {
                    "metric": "Systolic",
                    "data01": "123",
                    "data02": "112",
                    "data03": "113",
                    "data04": "145",
                    "data05": "156",
                    "data06": "178",
                    "data07": "145",
                    "data08": "178",
                    "data09": "197",
                    "data10": "134",
                    "data11": "123",
                    "data12": "132"
                },
                {
                    "metric": "Diastolic",
                    "data01": "90",
                    "data02": "99",
                    "data03": "45",
                    "data04": "111",
                    "data05": "23",
                    "data06": "78",
                    "data07": "98",
                    "data08": "111",
                    "data09": "111",
                    "data10": "123",
                    "data11": "124",
                    "data12": "90"
                }
            ]
        },
        {
            "metric": "BP2",
            "data01": "150/90",
            "data02": "112/99",
            "data03": "113/45",
            "data04": "145/67",
            "data05": "156/23",
            "data06": "178/78",
            "data07": "145/98",
            "data08": "178/111",
            "data09": "197/111",
            "data10": "134/123",
            "data11": "123/124",
            "data12": "132/90",
            components : [
                {
                    "metric": "Systolic",
                    "data01": "150",
                    "data02": "112",
                    "data03": "113",
                    "data04": "145",
                    "data05": "156",
                    "data06": "178",
                    "data07": "145",
                    "data08": "178",
                    "data09": "197",
                    "data10": "134",
                    "data11": "123",
                    "data12": "132"
                },
                {
                    "metric": "Diastolic",
                    "data01": "90",
                    "data02": "99",
                    "data03": "45",
                    "data04": "67",
                    "data05": "23",
                    "data06": "78",
                    "data07": "98",
                    "data08": "111",
                    "data09": "111",
                    "data10": "123",
                    "data11": "124",
                    "data12": "90"
                }
            ]
        }
    ];



    $scope.clientDetailsData2 = [
        {
            "metric": "BP",
            "data01": "999/99",
            "data02": "112/99",
            "data03": "113/45",
            "data04": "145/111",
            "data05": "156/23",
            "data06": "178/78",
            "data07": "145/98",
            "data08": "178/111",
            "data09": "197/111",
            "data10": "134/123",
            "data11": "123/124",
            "data12": "132/90",
            components : [
                {
                    "metric": "Systolic",
                    "data01": "123",
                    "data02": "112",
                    "data03": "113",
                    "data04": "145",
                    "data05": "156",
                    "data06": "178",
                    "data07": "145",
                    "data08": "178",
                    "data09": "197",
                    "data10": "134",
                    "data11": "123",
                    "data12": "132"
                },
                {
                    "metric": "Diastolic",
                    "data01": "90",
                    "data02": "99",
                    "data03": "45",
                    "data04": "111",
                    "data05": "23",
                    "data06": "78",
                    "data07": "98",
                    "data08": "111",
                    "data09": "111",
                    "data10": "123",
                    "data11": "124",
                    "data12": "90"
                }
            ]
        },
        {
            "metric": "BP2",
            "data01": "150/90",
            "data02": "199/99",
            "data03": "113/45",
            "data04": "145/67",
            "data05": "156/23",
            "data06": "178/78",
            "data07": "145/98",
            "data08": "178/111",
            "data09": "197/111",
            "data10": "134/123",
            "data11": "123/124",
            "data12": "132/90",
            components : [
                {
                    "metric": "Systolic",
                    "data01": "150",
                    "data02": "112",
                    "data03": "113",
                    "data04": "145",
                    "data05": "156",
                    "data06": "178",
                    "data07": "145",
                    "data08": "178",
                    "data09": "197",
                    "data10": "134",
                    "data11": "123",
                    "data12": "132"
                },
                {
                    "metric": "Diastolic",
                    "data01": "90",
                    "data02": "99",
                    "data03": "45",
                    "data04": "67",
                    "data05": "23",
                    "data06": "78",
                    "data07": "98",
                    "data08": "111",
                    "data09": "111",
                    "data10": "123",
                    "data11": "124",
                    "data12": "90"
                }
            ]
        }
];

    var highlightCell = function highlightCell(grid, row, col, rowRenderIndex, colRenderIndex) {

        var p = (grid.getCellValue(row,col)).toString();
        var n = p.indexOf("/");
        var sys = p.substr(0, n);
        var dia = p.substr(n+1, p.length);

        //$log.debug(p, sys, dia);


        if ((sys >= 145) && ($scope.clientDetailsData[rowRenderIndex].metric === 'BP')) {
            return 'selected';
        }
        else if ((dia >= 90) && ($scope.clientDetailsData[rowRenderIndex].metric === 'BP')) {
            return 'selected';
        }

    };


   /* var highlightCellChild = function highlightCellChild(grid, row, col, rowRenderIndex, colRenderIndex) {




        if ((grid.getCellValue(row, col) >= 145) && (row.entity.metric === "Systolic")) {
            return 'selected';
        }
        else if ((grid.getCellValue(row, col) >= 90) && (row.entity.metric=== "Diastolic")) {
            return 'selected';
        }


    };*/


    $scope.clientDetailGridOptions = {
        enableSorting: true,
        //This is the template that will be used to render subgrid.
        expandableRowTemplate: './templates/expandableRowTemplate.html',
        //This will be the height of the subgrid
        expandableRowHeight: 70,
        //Variables of object expandableScope will be available in the scope of the expanded subgrid
        expandableRowScope: {
            subGridVariable: 'subGridScopeVariable'
        }


    };

    $scope.clientDetailGridOptions.columnDefs = [
        {field: "metric", displayName: $scope.clientDetailsDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
        {field: "data01", displayName: $scope.clientDetailsDataHeaders[0].data01, cellClass:highlightCell},
        {field: "data02", displayName: $scope.clientDetailsDataHeaders[0].data02, cellClass:highlightCell},
        {field: "data03", displayName: $scope.clientDetailsDataHeaders[0].data03, cellClass:highlightCell},
        {field: "data04", displayName: $scope.clientDetailsDataHeaders[0].data04, cellClass:highlightCell},
        {field: "data05", displayName: $scope.clientDetailsDataHeaders[0].data05, cellClass:highlightCell},
        {field: "data06", displayName: $scope.clientDetailsDataHeaders[0].data06, cellClass:highlightCell},
        {field: "data07", displayName: $scope.clientDetailsDataHeaders[0].data07, cellClass:highlightCell},
        {field: "data08", displayName: $scope.clientDetailsDataHeaders[0].data08, cellClass:highlightCell},
        {field: "data09", displayName: $scope.clientDetailsDataHeaders[0].data09, cellClass:highlightCell},
        {field: "data10", displayName: $scope.clientDetailsDataHeaders[0].data10, cellClass:highlightCell},
        {field: "data11", displayName: $scope.clientDetailsDataHeaders[0].data11, cellClass:highlightCell},
        {field: "data12", displayName: $scope.clientDetailsDataHeaders[0].data12, cellClass:highlightCell},
        //{field: 'call', displayName: $scope.myDataHeaders[0].call, cellTemplate:'<div><a href="#/" title="Call us"><img class="icon" alt=""/></a></div>'}
    ];

    $scope.clientDetailsData = addSubGridComponents($scope, $scope.clientDetailsData);

    /*for(i = 0; i < $scope.clientDetailsData.length; i++){
        $scope.clientDetailsData[i].subGridOptions = {
            headerTemplate: './templates/header-template.html',
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            columnDefs: [
                //{field: "metric", displayName: $scope.myDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
                {field: 'metric', displayName: $scope.clientDetailsDataHeaders[0].metric, cellClass:highlightCellChild, cellTooltip:true, enableColumnMoving:false},
                {field: "data01", displayName: $scope.clientDetailsDataHeaders[0].data01, cellClass:highlightCellChild},
                {field: "data02", displayName: $scope.clientDetailsDataHeaders[0].data02, cellClass:highlightCellChild},
                {field: "data03", displayName: $scope.clientDetailsDataHeaders[0].data03, cellClass:highlightCellChild},
                {field: "data04", displayName: $scope.clientDetailsDataHeaders[0].data04, cellClass:highlightCellChild},
                {field: "data05", displayName: $scope.clientDetailsDataHeaders[0].data05, cellClass:highlightCellChild},
                {field: "data06", displayName: $scope.clientDetailsDataHeaders[0].data06, cellClass:highlightCellChild},
                {field: "data07", displayName: $scope.clientDetailsDataHeaders[0].data07, cellClass:highlightCellChild},
                {field: "data08", displayName: $scope.clientDetailsDataHeaders[0].data08, cellClass:highlightCellChild},
                {field: "data09", displayName: $scope.clientDetailsDataHeaders[0].data09, cellClass:highlightCellChild},
                {field: "data10", displayName: $scope.clientDetailsDataHeaders[0].data10, cellClass:highlightCellChild},
                {field: "data11", displayName: $scope.clientDetailsDataHeaders[0].data11, cellClass:highlightCellChild},
                {field: "data12", displayName: $scope.clientDetailsDataHeaders[0].data12, cellClass:highlightCellChild}
            ],
            data: $scope.clientDetailsData[i].components
        }
    } */

    $scope.clientDetailGridOptions.data = $scope.clientDetailsData;

}




function clientsUiGrid($scope, $log, $interval, uiGridConstants, $http, clientsFactory, client) {



    $scope.clientsDataHeaders = [
        {
            "metric": "First Name",
            "data00": "Last Name",
            "data01": "Client ID",
            "data02": "HealthPAL SN",
            "data03": "Morbid Condition",
            "data04": "Co-Morbid Conditions",
            "data05": "IVR Threshold",
            "data06": "Language",
            "data07": "Gender",
            "data08": "Timezone",
            "data09": "DOB",
            "editcol": "Edit"
        }
    ];


    $scope.clientsData = [
        {
            "metric": "DemoClient 001",
            "data01": "",
            "data02": "011107008148926",
            "data03": "Congestive Heart Failure",
            "data04": "Hypertension",
            "data05": "0",
            "data06": "English",
            "data07": "Male",
            "data08": "Central Standard Timezone",
            "data09": "1/1/1911",
            "editcol": "Edit"
        },
        {
            "metric": "DemoClient 002",
            "data01": "",
            "data02": "081107008148926",
            "data03": "Congestive Heart Failure",
            "data04": "Hypertension",
            "data05": "0",
            "data06": "French",
            "data07": "Male",
            "data08": "Central Standard Timezone",
            "data09": "5/1/1911",
            "editcol": "Edit"
        },
        {
            "metric": "DemoClient 003",
            "data01": "",
            "data02": "091107008148926",
            "data03": "Congestive Heart Failure",
            "data04": "Hypertension",
            "data05": "0",
            "data06": "German",
            "data07": "Male",
            "data08": "Central Standard Timezone",
            "data09": "8/1/1911",
            "editcol": "Edit"
        }
    ];

    var highlightCell = function highlightCell(grid, row, col, rowRenderIndex, colRenderIndex) {
        if ((grid.getCellValue(row,col) >= 145) && ($scope.clientsData[rowRenderIndex].metric === 'Systolic')) {
            return 'selected';
        }
        else if ((grid.getCellValue(row,col) >= 90) && ($scope.clientsData[rowRenderIndex].metric === 'Diastolic')) {
            return 'selected';
        }

    };





    $scope.clientGridOptions = {
        enableSorting: true,
        enableRowSelection: true, enableRowHeaderSelection: false,
        enableFiltering: true,
        paginationPageSizes: [5, 10, 15],
        paginationPageSize: 5

    };


    $scope.clientGridOptions.columnDefs = [
        {field: "firstName", displayName: $scope.clientsDataHeaders[0].metric, cellClass:highlightCell, cellTooltip:true, enableColumnMoving:false},
        {field: "lastName", displayName: $scope.clientsDataHeaders[0].data00, cellClass:highlightCell},
        {field: "clientIdentifier", displayName: $scope.clientsDataHeaders[0].data01, cellClass:highlightCell},
        {field: "data02", displayName: $scope.clientsDataHeaders[0].data02, cellClass:highlightCell},
        {field: "primaryMorbidCondition", displayName: $scope.clientsDataHeaders[0].data03, cellClass:highlightCell},
        {field: "coMorbidConditions", displayName: $scope.clientsDataHeaders[0].data04, cellClass:highlightCell},
        {field: "noReadingThreshold", displayName: $scope.clientsDataHeaders[0].data05, cellClass:highlightCell},
        {field: "language", displayName: $scope.clientsDataHeaders[0].data06, cellClass:highlightCell},
        {field: "gender", displayName: $scope.clientsDataHeaders[0].data07, cellClass:highlightCell},
        {field: "timezone", displayName: $scope.clientsDataHeaders[0].data08, cellClass:highlightCell},
        {field: "dob", displayName: $scope.clientsDataHeaders[0].data09, cellClass:highlightCell},
        //{field: 'editcol', displayName: $scope.clientsDataHeaders[0].editcol, cellTemplate:'<img class="zicon" alt=""/>'}
        {field: 'editcol', displayName: $scope.clientsDataHeaders[0].editcol, cellTemplate:'<div> <a ui-sref="index.clients" ><img class="editicon" alt=""/></a></div>'}
    ];

    //$scope.clientGridOptions.data = $scope.clientsData;  //TODO:
    /*$http.get('http://localhost:4000/clients')
        .success(function(data) {
            $scope.clientGridOptions.data = data;
            $log.log("******************** 1.5");
        });
*/

    $log.log("******************** 1");

    clientsFactory.getClients().
        success(function(data, status, headers, config){
            $scope.clientGridOptions.data = data;
            $log.debug( $scope.clientGridOptions.data);
            $log.debug("******************** 2");
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.testname = "ERROR";
            $log.error("getClients failed" + status);
        });


    $log.log("******************** 3");


    $scope.clientGridOptions.multiSelect = false;
    $scope.clientGridOptions.modifierKeysToMultiSelect = false;
    $scope.clientGridOptions.noUnselect = true;
    $scope.clientGridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        //$log.debug("MAHIMA IN api");
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {
            var msg = 'row selected ' + row.isSelected + '; client = ' + row.entity.metric;
            $log.log(msg);
            //$log.log($scope.clientGridOptions.data[1]);
            //$log.log(row);

            $scope.phoneNumberAccounts = [];
            $scope.emailAccounts = [];
            copyClientData($scope, row.entity, $log);


            //$scope.clientDetailGridOptions.data = $scope.clientDetailsData2; //THIS IS HOW YOU CHANGE THE dataset
            //$interval( function() {$scope.gridApi.selection.selectRow($scope.clientDetailGridOptions.data[0]);}, 0, 1);
        });


        $log.log("******************** 4");
    };

    $scope.toggleRowSelection = function($log) {
        $scope.gridApi.selection.clearSelectedRows();
        $scope.clientGridOptions.enableRowSelection = !$scope.clientGridOptions.enableRowSelection;
        $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
        $log.debug("MAHIMA IN api");
    };

}



function gridSubGRid($scope) {
    $scope.myDataHeaders = [
        {
            "metric": "READING",
            "data01": "3/1/2015",
            "data02": "3/2/2015",
            "data03": "3/3/2015",
            "data04": "3/4/2015",
            "data05": "3/5/2015",
            "data06": "3/6/2015",
            "data07": "3/7/2015",
            "data08": "3/8/2015",
            "data09": "3/9/2015",
            "data10": "3/10/2015",
            "data11": "3/11/2015",
            "data12": "3/12/2015",
            "call": "Action"
        }
    ];


    $scope.myData = [
        {
            "metric": "BP",
            "data01": "",
            "data02": "",
            "data03": "",
            "data04": "",
            "data05": "",
            "data06": "",
            "data07": "",
            "data08": "",
            "data09": "",
            "data10": "",
            "data11": "",
            "data12": "",
            components : [
                {
                    "metric": "Systolic",
                    "data01": "123",
                    "data02": "112",
                    "data03": "113",
                    "data04": "145",
                    "data05": "156",
                    "data06": "178",
                    "data07": "145",
                    "data08": "178",
                    "data09": "197",
                    "data10": "134",
                    "data11": "123",
                    "data12": "132"
                },
                {
                    "metric": "Diastolic",
                    "data01": "90",
                    "data02": "99",
                    "data03": "45",
                    "data04": "111",
                    "data05": "23",
                    "data06": "78",
                    "data07": "98",
                    "data08": "111",
                    "data09": "111",
                    "data10": "123",
                    "data11": "124",
                    "data12": "90"
                }
            ]
        },
        {
            "metric": "BP2",
            "data01": "",
            "data02": "",
            "data03": "",
            "data04": "",
            "data05": "",
            "data06": "",
            "data07": "",
            "data08": "",
            "data09": "",
            "data10": "",
            "data11": "",
            "data12": "",
            components : [
                {
                    "metric": "Systolic",
                    "data01": "150",
                    "data02": "112",
                    "data03": "113",
                    "data04": "145",
                    "data05": "156",
                    "data06": "178",
                    "data07": "145",
                    "data08": "178",
                    "data09": "197",
                    "data10": "134",
                    "data11": "123",
                    "data12": "132"
                },
                {
                    "metric": "Diastolic",
                    "data01": "90",
                    "data02": "99",
                    "data03": "45",
                    "data04": "67",
                    "data05": "23",
                    "data06": "78",
                    "data07": "98",
                    "data08": "111",
                    "data09": "111",
                    "data10": "123",
                    "data11": "124",
                    "data12": "90"
                }
            ]
        }
    ];

    var highlightCell = function highlightCell(grid, row, col, rowRenderIndex, colRenderIndex) {
        if ((grid.getCellValue(row,col) >= 145) && ($scope.myData[rowRenderIndex].metric === 'Systolic')) {
            return 'selected';
        }
        else if ((grid.getCellValue(row,col) >= 90) && ($scope.myData[rowRenderIndex].metric === 'Diastolic')) {
            return 'selected';
        }

    };


    var highlightCellChild = function highlightCellChild(grid, row, col, rowRenderIndex, colRenderIndex) {
        //{($scope.myData[0].components[rowRenderIndex].metric === 'Systolic')) {

        /*$log.debug(row);
         $log.debug(col);

         $log.debug(rowRenderIndex);
         $log.debug(colRenderIndex);*/



        if ((grid.getCellValue(row, col) >= 145) && (row.entity.metric === "Systolic")) {
            return 'selected';
        }
        else if ((grid.getCellValue(row, col) >= 90) && (row.entity.metric=== "Diastolic")) {
            return 'selected';
        }

        //&& ($scope.myData[0].components[rowRenderIndex].metric === 'Diastolic')

    };


    $scope.gridOptions = {
        enableSorting: true,
        //This is the template that will be used to render subgrid.
        expandableRowTemplate: './templates/expandableRowTemplate.html',
        //This will be the height of the subgrid
        expandableRowHeight: 150,
        //Variables of object expandableScope will be available in the scope of the expanded subgrid
        expandableRowScope: {
            subGridVariable: 'subGridScopeVariable'
        }


    };

    $scope.gridOptions.columnDefs = [
        {field: "metric", displayName: $scope.myDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
        {field: "data01", displayName: $scope.myDataHeaders[0].data01, cellClass:highlightCell},
        {field: "data02", displayName: $scope.myDataHeaders[0].data02, cellClass:highlightCell},
        {field: "data03", displayName: $scope.myDataHeaders[0].data03, cellClass:highlightCell},
        {field: "data04", displayName: $scope.myDataHeaders[0].data04, cellClass:highlightCell},
        {field: "data05", displayName: $scope.myDataHeaders[0].data05, cellClass:highlightCell},
        {field: "data06", displayName: $scope.myDataHeaders[0].data06, cellClass:highlightCell},
        {field: "data07", displayName: $scope.myDataHeaders[0].data07, cellClass:highlightCell},
        {field: "data08", displayName: $scope.myDataHeaders[0].data08, cellClass:highlightCell},
        {field: "data09", displayName: $scope.myDataHeaders[0].data09, cellClass:highlightCell},
        {field: "data10", displayName: $scope.myDataHeaders[0].data10, cellClass:highlightCell},
        {field: "data11", displayName: $scope.myDataHeaders[0].data11, cellClass:highlightCell},
        {field: "data12", displayName: $scope.myDataHeaders[0].data12, cellClass:highlightCell},
        //{field: 'call', displayName: $scope.myDataHeaders[0].call, cellTemplate:'<div><a href="#/" title="Call us"><img class="icon" alt=""/></a></div>'}
    ];


    for(i = 0; i < $scope.myData.length; i++){
        $scope.myData[i].subGridOptions = {
            headerTemplate: './templates/header-template.html',
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            columnDefs: [
                //{field: "metric", displayName: $scope.myDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
                {field: 'metric', displayName: $scope.myDataHeaders[0].metric, cellClass:highlightCellChild, cellTooltip:true, enableColumnMoving:false},
                {field: "data01", displayName: $scope.myDataHeaders[0].data01, cellClass:highlightCellChild},
                {field: "data02", displayName: $scope.myDataHeaders[0].data02, cellClass:highlightCellChild},
                {field: "data03", displayName: $scope.myDataHeaders[0].data03, cellClass:highlightCellChild},
                {field: "data04", displayName: $scope.myDataHeaders[0].data04, cellClass:highlightCellChild},
                {field: "data05", displayName: $scope.myDataHeaders[0].data05, cellClass:highlightCellChild},
                {field: "data06", displayName: $scope.myDataHeaders[0].data06, cellClass:highlightCellChild},
                {field: "data07", displayName: $scope.myDataHeaders[0].data07, cellClass:highlightCellChild},
                {field: "data08", displayName: $scope.myDataHeaders[0].data08, cellClass:highlightCellChild},
                {field: "data09", displayName: $scope.myDataHeaders[0].data09, cellClass:highlightCellChild},
                {field: "data10", displayName: $scope.myDataHeaders[0].data10, cellClass:highlightCellChild},
                {field: "data11", displayName: $scope.myDataHeaders[0].data11, cellClass:highlightCellChild},
                {field: "data12", displayName: $scope.myDataHeaders[0].data12, cellClass:highlightCellChild}
            ],
            data: $scope.myData[i].components
        }
    }

    $scope.gridOptions.data = $scope.myData;



}



angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl, ['clientsFactory'])


