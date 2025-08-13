# DriveTwo Studio (Sanity Hosted) — โฟลเดอร์พร้อมอัปโหลด
ใช้สำหรับอัปโหลดเข้า GitHub → จากนั้น deploy บน Sanity Hosted Studio (ไม่ต้องใช้ Vercel)

## ขั้นตอนใช้งาน (สั้น ๆ)
1) อัปโหลดโฟลเดอร์ `studio/` นี้เข้า repo ของคุณ (ทับของเดิมได้)
2) เปิด GitHub Codespaces หรือ Gitpod (หรือเครื่องตัวเอง) แล้วรัน:
   ```bash
   npm i -g sanity
   cd studio
   npm install
   sanity login
   sanity init      # เลือก Use existing project → เลือกโปรเจกต์ของคุณ → dataset = production
   sanity deploy    # ตั้ง subdomain เช่น drivetwo-studio
   ```
3) ได้ URL: `https://<ชื่อ>.sanity.studio` ใช้เป็นหลังบ้านได้ทันที

## หมายเหตุ
- ไฟล์ `sanity.config.ts` มี `projectId: 'PROJECT_ID'` เป็นที่คั่นเวลา
  - หลังรัน `sanity init` ระบบจะกรอกให้อัตโนมัติ หรือคุณจะแก้ค่าด้วยมือก่อน deploy ก็ได้
- สคีมาที่มี: Brand, CarModel (พร้อม Dynamic Specs + JSON), Review, News, FieldGroup, FieldLibrary
