// smaple data table using jquery

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable'; // Include jQuery UI for jqGrid
import 'free-jqgrid/js/jquery.jqgrid.min.js';
import 'free-jqgrid/css/ui.jqgrid.css';

const GridComponent = () => {
  useEffect(() => {
    // Example static dataset
    const mydata = [
      { id: "1", name: "John", age: "25" },
      { id: "2", name: "Jane", age: "30" },
      { id: "3", name: "Mike", age: "32" },
      // Add more data as needed
    ];

    // Initialize jqGrid
    $("#grid").jqGrid({
      datatype: "local",
      data: mydata,
      colNames: ["ID", "Name", "Age"],
      colModel: [
        { name: "id", index: "id", width: 60, sorttype: "int" },
        { name: "name", index: "name", width: 100 },
        { name: "age", index: "age", width: 80, sorttype: "int" },
      ],
      pager: "#pager",
      rowNum: 10,
      rowList: [10, 20, 30],
      sortname: "id",
      viewrecords: true,
      sortorder: "desc",
      caption: "My First jqGrid",
    });
  }, []);

  return (
    <div>
      <table id="grid"></table>
      <div id="pager"></div>
    </div>
  );
};

export default GridComponent;
