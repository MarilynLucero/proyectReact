import BlushRosado from "../../assets/productos/BlushRosado.jpg";
import cabernetSuavignonTinto from "../../assets/productos/cabernetSuavignonTinto.jpg";
import ChardonnayBlanco from "../../assets/productos/ChardonnayBlanco.jpg";
import malbecTinto from "../../assets/productos/malbecTinto.jpg";
import PinotNoirRosado from "../../assets/productos/PinotNoirRosado.jpg";
import vinoTorrontesBlanco from "../../assets/productos/vinoTorrontesBlanco.jpg";

export const arregloProductos=[
    {id:1, name: "Angelica Zapata - Cabernet Suavignon", price: 3477, details:"Angélica Zapata Cabernet Sauvignon es un blend proveniente de uvas Cabernet de tres diferentes viñedos. El resultado es un vino de gran concentración y elegancia", stock:"10", pictureURL:cabernetSuavignonTinto, category:"tinto"},
    {id:2, name: "Luigi Bosca - Malbec", price: 2199, details:"Luigi Bosca Malbec es un tinto de color rojo violáceo brillante. Sus aromas son intensos y amables, de gran tipicidad varietal, con notas de frutas rojas y florales como violetas; también presenta notas especiadas", stock:"8", pictureURL:malbecTinto, category:"tinto"},
    {id:3, name: "Humberto Canali - Blush", price: 7270, details:"Atractivo color salmon, aroma a notas frutales como guindas, cerezas y frambuesas. En boca se percibe suave, sedoso, armónico y amable.", stock:"7", pictureURL:BlushRosado, category:"rosado"},
    {id:4, name: "Weinert Montfleuty - Pinot Noir", price: 7800, details:"Weinert Montfleury Pinot Noir Rosé es un vino rosado de perfil alegre y de excelente porte. La cosecha temprana en enero produce vinos de acidez natural marcada, otorgándole frescura y nervio", stock:"4", pictureURL:PinotNoirRosado, category:"rosado"},
    {id:5, name: "Spy Valley - Chardonnay Blanco", price: 6090, details:"Spy Valley - Chardonnay Blanco es Crujiente y brillante, con un delicado final limpio. Sabores a melocotón, melón y piel de naranja junto con la sensación cremosa en la boca y las notas de nuez del envejecimiento en barrica.", stock:"3", pictureURL:ChardonnayBlanco, category:"blanco"},
    {id:6, name: "Etchart Privado - Torrontés", price: 5856, details:"Etchart Privado Torrontés posee aromas de la propia uva que le da origen a un producto fiel y consistente. Con sabor a frutas frescas , uvas blancas y un sutil final floral.", stock:"6", pictureURL:vinoTorrontesBlanco, category:"blanco"},
]