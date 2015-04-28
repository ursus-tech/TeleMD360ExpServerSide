/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $log, $interval, uiGridConstants, $resource, $http) {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';

    //gridSubGRid($scope);  //creates the grid with subgrid - in patient details

    $scope.testname = "MAHIMA"
    myFactoryFunction($scope, $http);

    clientsUiGrid($scope, $log, $interval, uiGridConstants);

    clientDetailsGridSubGrid($scope, $log,  $interval, uiGridConstants);



    this.states = [
        'Arabic',
        'Bengali',
        'Chinese',
        'English',
        'French',
        'German',
        'Greek',
        'Hindu',
        'Italian',
        'Japanese',
        'Latin',
        'Portuguese',
        'Russian',
        'Spanish'

    ];

    this.bodyTypes = [
        'Large',
        'Medium',
        'Small'
    ];

    this.genderTypes = [
            'Male',
            'Female',
            'Other',
            'Unavailable'
    ];

    this.primaryConditions = [
        'Asthmatic',
        'CAD',
        'Congestive Heart Failure',
        'COPD',
        'Diabetes',
        'Diabetes Type 1',
        'Diabetes Type 2',
        'Eval',
        'Gestatioanal Diabetes',
        'Heart Failure',
        'Hypertension',
        'Major Depressive Disorder',
        'None',
        'Other',
        'Pre Diabetes',
        'Respiratory Failure',
        'Trach',
        'Unspecified'
    ];

    this.secondaryConditions = [
        'Asthmatic',
        'CAD',
        'Congestive Heart Failure',
        'COPD',
        'Diabetes',
        'Diabetes Type 1',
        'Diabetes Type 2',
        'Eval',
        'Gestatioanal Diabetes',
        'Heart Failure',
        'Hypertension',
        'Major Depressive Disorder',
        'None',
        'Other',
        'Pre Diabetes',
        'Respiratory Failure',
        'Trach',
        'Unspecified'
    ];

    this.timezones = [
        'Alaska Standard Time',
        'Central Standard Time',
        'Eastern Standard Time',
        'Hawaii Standard Time',
        'Mountain Standard Time',
        'Pacific Standard Time'
    ];

    this.phoneTypes = [
        'Business',
        'Emergency',
        'Fax',
        'Home',
        'IVR',
        'Mobile',
        'Triage',
        'Warranty'
    ];

    this.emailaddressTypes = [
        'Business',
        'Mobile Phone',
        'Personal',
        'Warranty'
    ];

};


function myFactoryFunction($scope, $http) {
    $http.get('http://localhost:4000/singleUser').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.testname = data; //try data.name for key/value
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

            $scope.testname = "ERROR";
        });
}

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
    for(i = 0; i < someData.length; i++){
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


function clientsUiGrid($scope, $log, $interval, uiGridConstants) {
    $scope.clientsDataHeaders = [
        {
            "metric": "Client",
            "data01": "Client ID",
            "data02": "HealthPAL SN",
            "data03": "Condition 1",
            "data04": "Condition 2",
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
        {field: "metric", displayName: $scope.clientsDataHeaders[0].metric, cellClass:highlightCell, cellTooltip:true, enableColumnMoving:false},
        {field: "data01", displayName: $scope.clientsDataHeaders[0].data01, cellClass:highlightCell},
        {field: "data02", displayName: $scope.clientsDataHeaders[0].data02, cellClass:highlightCell},
        {field: "data03", displayName: $scope.clientsDataHeaders[0].data03, cellClass:highlightCell},
        {field: "data04", displayName: $scope.clientsDataHeaders[0].data04, cellClass:highlightCell},
        {field: "data05", displayName: $scope.clientsDataHeaders[0].data05, cellClass:highlightCell},
        {field: "data06", displayName: $scope.clientsDataHeaders[0].data06, cellClass:highlightCell},
        {field: "data07", displayName: $scope.clientsDataHeaders[0].data07, cellClass:highlightCell},
        {field: "data08", displayName: $scope.clientsDataHeaders[0].data08, cellClass:highlightCell},
        {field: "data09", displayName: $scope.clientsDataHeaders[0].data09, cellClass:highlightCell},
        //{field: 'editcol', displayName: $scope.clientsDataHeaders[0].editcol, cellTemplate:'<img class="zicon" alt=""/>'}
        {field: 'editcol', displayName: $scope.clientsDataHeaders[0].editcol, cellTemplate:'<div> <a ui-sref="index.clients" ><img class="editicon" alt=""/></a></div>'}
    ];

    $scope.clientGridOptions.data = $scope.clientsData;

    $scope.clientGridOptions.multiSelect = false;
    $scope.clientGridOptions.modifierKeysToMultiSelect = false;
    $scope.clientGridOptions.noUnselect = true;
    $scope.clientGridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        //$log.debug("MAHIMA IN api");
        gridApi.selection.on.rowSelectionChanged($scope,function(row){
            var msg = 'row selected ' + row.isSelected + '; client = ' + row.entity.metric;
            $log.log(msg);

            //*************************

            /*for(i = 0; i < $scope.clientDetailsData2.length; i++){
                $scope.clientDetailsData2[i].subGridOptions = {
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
                    data: $scope.clientDetailsData2[i].components
                }
            } */

            $scope.clientDetailsData2 = addSubGridComponents($scope, $scope.clientDetailsData2);
            //*************************

            $scope.clientDetailGridOptions.data = $scope.clientDetailsData2; //THIS IS HOW YOU CHANGE THE dataset
            $interval( function() {$scope.gridApi.selection.selectRow($scope.clientDetailGridOptions.data[0]);}, 0, 1);
        });
    };

    $scope.toggleRowSelection = function($log) {
        $scope.gridApi.selection.clearSelectedRows();
        $scope.clientGridOptions.enableRowSelection = !$scope.clientGridOptions.enableRowSelection;
        $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
        $log.debug("MAHIMA IN api");
    };
   /* for(i = 0; i < $scope.clientsData.length; i++){
        $scope.clientsData[i].subGridOptions = {
            headerTemplate: './templates/header-template.html',
            enableHorizontalScrollbar:0,
            enableVerticalScrollbar:0,
            columnDefs: [
                //{field: "metric", displayName: $scope.myDataHeaders[0].metric, cellClass:'red', cellTooltip:true, enableColumnMoving:false},
                {field: 'metric', displayName: $scope.clientsDataHeaders[0].metric, cellClass:highlightCellChild, cellTooltip:true, enableColumnMoving:false},
                {field: "data01", displayName: $scope.clientsDataHeaders[0].data01, cellClass:highlightCellChild},
                {field: "data02", displayName: $scope.clientsDataHeaders[0].data02, cellClass:highlightCellChild},
                {field: "data03", displayName: $scope.clientsDataHeaders[0].data03, cellClass:highlightCellChild},
                {field: "data04", displayName: $scope.clientsDataHeaders[0].data04, cellClass:highlightCellChild},
                {field: "data05", displayName: $scope.clientsDataHeaders[0].data05, cellClass:highlightCellChild},
                {field: "data06", displayName: $scope.clientsDataHeaders[0].data06, cellClass:highlightCellChild},
                {field: "data07", displayName: $scope.clientsDataHeaders[0].data07, cellClass:highlightCellChild},
                {field: "data08", displayName: $scope.clientsDataHeaders[0].data08, cellClass:highlightCellChild},
                {field: "data09", displayName: $scope.clientsDataHeaders[0].data09, cellClass:highlightCellChild},
                {field: "data10", displayName: $scope.clientsDataHeaders[0].data10, cellClass:highlightCellChild}
            ],
            data: $scope.clientsData[i].components
        }
    } */





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
    .controller('MainCtrl', MainCtrl)


