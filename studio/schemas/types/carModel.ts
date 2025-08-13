export default {
  name: 'carModel',
  title: 'Car Model (รุ่น)',
  type: 'document',
  fields: [
    {name:'brand', title:'ยี่ห้อ', type:'reference', to:[{type:'brand'}], validation:(Rule:any)=>Rule.required()},
    {name:'modelName', title:'ชื่อรุ่น', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'generation', title:'รุ่นย่อย/เจน', type:'string'},
    {name:'year', title:'ปีที่เปิดตัว', type:'number'},
    {name:'bodyType', title:'ประเภทรถ', type:'string'},
    {name:'segment', title:'เซกเมนต์', type:'string'},
    {name:'priceTHB', title:'ราคา(บาท)', type:'number'},
    {name:'powertrain', title:'ระบบขับเคลื่อน', type:'string', options:{list:['ICE','Hybrid','EV']}},
    {name:'acceleration0to100', title:'0–100 (วินาที)', type:'number'},
    {name:'weightKg', title:'น้ำหนักรถ (กก.)', type:'number'},
    {name:'horsepower', title:'แรงม้า (HP)', type:'number'},
    {name:'torqueNm', title:'แรงบิด (Nm)', type:'number'},
    {name:'batteryKWh', title:'ความจุแบตเตอรี่ (kWh)', type:'number'},
    {name:'rangeKm', title:'ระยะทาง (km, ถ้า EV)', type:'number'},
    {name:'transmission', title:'เกียร์', type:'string'},
    {name:'drive', title:'ระบบขับเคลื่อน', type:'string'},
    {
      name:'specs',
      title:'สเปกแบบเพิ่มเอง (Dynamic Specs)',
      type:'array',
      of:[
        {
          type:'object',
          fields:[
            {name:'key', title:'คีย์ (จาก Field Library หรือพิมพ์ใหม่)', type:'string'},
            {name:'labelTh', title:'ชื่อไทย', type:'string'},
            {name:'value', title:'ค่า', type:'string'},
            {name:'unit', title:'หน่วย', type:'string'},
            {name:'group', title:'กลุ่ม', type:'reference', to:[{type:'fieldGroup'}]},
            {name:'order', title:'ลำดับ', type:'number'}
          ]
        }
      ]
    },
    {name:'attributes_values_json', title:'(ทางเลือก) JSON สำหรับสเปกจำนวนมาก', type:'text'},
    {name:'images', title:'ภาพ', type:'array', of:[{type:'image'}]}
  ]
}
