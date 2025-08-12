export default {
  name: 'carModel',
  title: 'Car Model (รุ่น)',
  type: 'document',
  fields: [
    {name:'brand', title:'ยี่ห้อ', type:'reference', to:[{type:'brand'}], validation:(Rule:any)=>Rule.required()},
    {name:'modelName', title:'ชื่อรุ่น', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'generation', title:'รุ่นย่อย/เจน', type:'string'},
    {name:'bodyType', title:'ประเภทรถ', type:'string'},
    {name:'priceTHB', title:'ราคา(บาท)', type:'number'},
    {name:'powertrain', title:'ระบบขับเคลื่อน', type:'string', options:{list:['ICE','Hybrid','EV']}},
    {name:'acceleration0to100', title:'0–100 (วินาที)', type:'number'},
    {name:'rangeKm', title:'ระยะทาง (km, ถ้า EV)', type:'number'},
    {name:'images', title:'ภาพ', type:'array', of:[{type:'image'}]}
  ]
}
