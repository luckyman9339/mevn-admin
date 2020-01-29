<template>
<div class="storeTable">

<div class="container mt-3">
  <h2>Filterable Table</h2>
  <p>Type something in the input field to search the table:</p>  
  <input class="form-control" id="myInput" type="text" placeholder="Search..">
  <br>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Business Name</th>
        <th>GSTIN</th>
        <th>Email</th>
        <th>Mobile No</th>
        <th>Address line 1</th>
        <th>Address line 2</th>
        <th>Shop Circle</th>
        <th>City</th>
        <th>State</th>
        <th>Pincode</th>
      </tr>
    </thead>
 <tbody id="myTable" v-for="data in tableData" v-bind:key="data._id">
      <tr>
        <td>{{data.businessName}}</td>
        <td>{{data.GSTIN}}</td>
        <td>{{data.email}}</td>
        <td>{{data.mobileNo}}</td>
        <td>{{data.aLine1}}</td>
        <td>{{data.aLine2}}</td>
        <td>{{data.shopCircle}}</td>
        <td>{{data.city}}</td>
        <td>{{data.state}}</td>
        <td>{{data.pincode}}</td>
      </tr>
 </tbody>
  </table>
</div>
</div>
</template>

<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
import axios from 'axios'
export default {
    data(){
        return{
            tableData:''
        }
    },

    created(){
        axios.get('http://localhost:5000/stores')
        .then((response)=>{
            const data = response.data
            this.tableData = data
        })
    }
}
</script>

<style scoped>
#storeTable {
    margin-top:3%
}

</style>