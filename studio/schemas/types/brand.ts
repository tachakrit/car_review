export default {
  name: 'brand',
  title: 'Brand (ยี่ห้อ)',
  type: 'document',
  fields: [
    {name:'name', title:'ชื่อยี่ห้อ', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'slug', title:'Slug', type:'slug', options:{source:'name'}},
    {name:'country', title:'ประเทศ', type:'string'},
    {name:'logo', title:'โลโก้', type:'image'}
  ]
}
