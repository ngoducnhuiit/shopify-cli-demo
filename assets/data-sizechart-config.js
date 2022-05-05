
var product_id_current_page = SIZECHART_MAGE.product.id;
console.log(product_id_current_page);

var sizeChartFilterByProductId = sizechart.filter(
  item => (item.products_id.split(",").includes(product_id_current_page.toString())&&(item.enable == 0)))
  .sort((a, b) =>  (a.priority < b.priority ? 1 : -1));
 var description = sizeChartFilterByProductId[0].description;
console.log(description);

  var newdiv2 = document.createElement( "div" );
  newdiv2.classList.add("sizechart");
  newdiv2.innerHTML = description;
  

if( description) {
   
  var app = document.querySelector(sizeChartFilterByProductId[0].placement);
  app.append(newdiv2);
  console.log("succeed");
}else{
  console.log('false');
}
 