//Home.jsY

import $ from "jquery";

import React, {Component} from 'react';

class Plate extends Component {
    render(){
        return(
            <div id="plate">
            </div>
        );
    }
}
export default Plate;

let rowFill = {};
const convertCol2Alpha = (col) => String.fromCharCode(65 + col);


const generateTable = (rows, cols) => {
    let tableHTML = `<table class="mb-3"><tbody><tr><th></th>`;
    for(let col = 0; col < cols; col++){
        const label = convertCol2Alpha(col);
        tableHTML += `<th scope="col" class="text-center">${label}</th>`;
    }
    tableHTML += "</tbody></tr><tbody>";
    for (let row = 1; row <= rows; row++){
        rowFill[row] = 0;
        tableHTML += `<tr><th id=${row} scope="row">${row}</th>`;
        // un-comment to allow to click row & function click_row
        // class="table-row" onclick="click_row(${row})" data-toggle="tooltip" data-placement="right" title="Click to populate row ${row}"
        for(let col = 0; col < cols; col++){
            const cell = convertCol2Alpha(col) + row;
            tableHTML += 
            `<td id=${cell} row=${row} class="border border-2" onclick="click_cell(${cell})" data-toggle="tooltip" data-placement="top" title="Empty">
                <section class="hovercell mx-1">${cell}</section>
            </td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</tbody></table>";
    /*$(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })*/
    
    return tableHTML;
}

/*const newTable = () => {
    if (size.value == "96") {
        rows = 12;
        cols = 8;
    }
    if (size.value == "384") {
        rows = 24;
        cols = 16;
    }
    if(size.value == "1536") {
        rows = 64;
        cols = 24;
    }
    table.innerHTML = generateTable(rows, cols);
}

newTable(); 
*/

//document.getElementById("plate").innerHTML = generateTable(16,8);

$("#plate").add(generateTable(16,8));