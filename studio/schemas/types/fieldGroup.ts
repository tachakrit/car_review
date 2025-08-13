export default {
  name: 'fieldGroup',
  title: 'กลุ่มสเปก (Field Group)',
  type: 'document',
  fields: [
    {name:'name', title:'ชื่อกลุ่ม', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'order', title:'ลำดับ', type:'number'}
  ]
}
