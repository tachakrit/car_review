export default {
  name: 'fieldLibrary',
  title: 'คลังฟิลด์สเปก (Field Library)',
  type: 'document',
  fields: [
    {name:'key', title:'คีย์ (อังกฤษ, ไม่เว้นวรรค)', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'labelTh', title:'ชื่อฟิลด์ (ภาษาไทย)', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'type', title:'ชนิดข้อมูล', type:'string', options:{list:['string','number','boolean','select','text']}},
    {name:'unit', title:'หน่วย', type:'string'},
    {name:'group', title:'กลุ่มสเปก', type:'reference', to:[{type:'fieldGroup'}]},
    {name:'order', title:'ลำดับ', type:'number'}
  ]
}
