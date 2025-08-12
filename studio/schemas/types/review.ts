export default {
  name: 'review',
  title: 'Review (รีวิว)',
  type: 'document',
  fields: [
    {name:'title', title:'ชื่อรีวิว', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'slug', title:'Slug', type:'slug', options:{source:'title'}},
    {name:'brand', title:'ยี่ห้อ', type:'reference', to:[{type:'brand'}]},
    {name:'model', title:'รุ่น', type:'reference', to:[{type:'carModel'}]},
    {name:'heroImage', title:'ภาพหัวเรื่อง', type:'image'},
    {name:'pros', title:'ข้อดี (สูงสุด 3)', type:'array', of:[{type:'string'}], options:{layout:'tags'}},
    {name:'cons', title:'ข้อสังเกต (สูงสุด 3)', type:'array', of:[{type:'string'}], options:{layout:'tags'}},
    {name:'content', title:'เนื้อหารีวิว', type:'array', of:[{type:'block'}]},
    {name:'publishDate', title:'วันที่เผยแพร่', type:'date'}
  ]
}
