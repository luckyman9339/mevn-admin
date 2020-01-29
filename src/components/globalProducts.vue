<template>
    <div class="storeTable">
      <v-card>
        <v-card-title>
      Products
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
    :items-per-page="5"
    class="elevation-0"
  >
  <template v-slot:item.baseImage="{ item }">
            <div class="p-2">
              <v-img :src="item.baseImage"  style="width:50px; height:50px"></v-img>
            </div>
          </template>
          
          <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >edit
      </v-icon>
      </template>

      <template v-slot:footer >
      <v-toolbar flat color="white" >
    <v-dialog v-model="dialog" max-width="60%" content-class="dialog" >
      <v-card>
     <v-card-text>
              <v-container style="margin-top=7%">
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.baseImage" label="Product Image"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.title" label="Product Title"
                     readonly></v-text-field>
                  </v-col>
                  
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.asin" label="ASIN"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.pasin" label="ASIN"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.category" label="Category"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.sub2" label="Sub-Category 1"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.sub3" label="Sub-Category 2"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.sub4" label="Sub-Category 2"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.shortDescription" label="Short Description"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.longDescription" label="Long Description"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.searchKeyword" label="Search Keywords"
                    readonly></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field :value="editedItem.storeName" label="Store Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.sku" label="SKU"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.quantity" label="Quantity"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.unit" label="Unit"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.salePrice" label="Sale Price"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.shippingCharges" label="Shipping Charges"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.packingCharges" label="Packing Charges"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="addToApi(editedItem)">Save</v-btn>
            </v-card-actions>
      </v-card>
    </v-dialog>
      </v-toolbar>
      </template>

  </v-data-table>
      </v-card>
    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          data:'',
            dialog:false,
          search:'',
         headers: [{
           text:'Product Image',
           align:'left',
           sortable:false,
           value:'baseImage'
         },
         {text:'Product title',value:'title'},
         {text:'Brand Name',value:'brandName'},
         {text:'sku',value:'sku'},
         {text:'ASIN',value:'asin'},
         {text:'Parent ASIN',value:'pasin'},
         {text:'Sale Price',value:'salePrice'},
         {text:'Price',value:'price'},
         {text:'Sub Category',value:'subCategory2'},
         
         {name:"Action",value:"action"}
         ],
      items: [ ],
      index:'',
      editedItem:{
        storeName:'',
        asin:'',
        pasin:'',
        sku:'',
        title:'',
        shortDescription:'',
        longDescription:'',
        category:'',
        subcategory2:'',
        subcategory3:'',
        subcategory4:'',
        price:'',
        salePrice:'',
        simpleProduct:'',
        variableProduct:'',
        variationType:'',
        parentVariation:'',
        variationName:'',
        varaitionSize:'',
        variationColor:'',
        variationImages:'',
        attributeSize:'',
        attributeColor:'',
        baseImage:'',
        additionalImage:'',
        productVideo:'',
        quantity:'',
        netWeight:'',
        grossWeight:'',
        width:'',
        height:'',
        length:'',
        taxPercentage:'',
        countryOfOrigin:'',
        manufacturerName:'',
        brandName:'',
        giftPack:'',
        searchKeyword:'',
        metaTitle:'',
        metaKeyword:'',
        shippingcharges:'',
        packingCharges:'',
      },
      defaultItem:{
       storeName:'',
        asin:'',
        pasin:'',
        sku:'',
        title:'',
        shortDescription:'',
        longDescription:'',
        category:'',
        subcategory2:'',
        subcategory3:'',
        subcategory4:'',
        price:'',
        salePrice:'',
        simpleProduct:'',
        variableProduct:'',
        variationType:'',
        parentVariation:'',
        variationName:'',
        varaitionSize:'',
        variationColor:'',
        variationImages:'',
        attributeSize:'',
        attributeColor:'',
        baseImage:'',
        additionalImage:'',
        productVideo:'',
        quantity:'',
        netWeight:'',
        grossWeight:'',
        width:'',
        height:'',
        length:'',
        taxPercentage:'',
        countryOfOrigin:'',
        manufacturerName:'',
        brandName:'',
        giftPack:'',
        searchKeyword:'',
        metaTitle:'',
        metaKeyword:'',
        shippingcharges:'',
        packingCharges:'',
      }
     }
    },
    methods:{
      editItem(item){
        this.index= this.items.indexOf(item)
        this.editedItem=Object.assign({},item)
        this.dialog=true
      },
      close(){
        this.dialog=false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
        }, 200)
      },
      
        addToApi(product){
          const axiosInstance = axios.create({
          baseURL: 'http://localhost:5000/',
         
        });
        axiosInstance({method:"POST",
        url:'product',
        data:product,
         headers: { Authorization: `Bearer ${this.$store.state.token}` }})
        .then((res)=>{
          console.log(res)
          this.close()
        })
      
        
      }  
      },
     created(){
        axios.get('http://localhost:5000/gcdisplay')
        .then((response)=>{
            const data = response.data
            
            data.forEach(element => {
                this.items.push(element)
                
            });
        })
    }
}
</script>

<style scoped>
.storeTable {
   margin:7% 3%; 
   /* width: 50% !important;  */
}

</style>