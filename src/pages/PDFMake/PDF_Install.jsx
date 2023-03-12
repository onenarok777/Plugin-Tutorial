import CodeBlock from "../../components/CodeBlock";
const Install = () => {
  return (
    <div>
      <div>
        <p style={{ textIndent: "1.5rem" }}>
          pdfmake เป็นโมดูล Node.js ที่ช่วยในการสร้างไฟล์ PDF ด้วย JavaScript
          โดยสามารถติดตั้งผ่าน npm ได้โดยใช้คำสั่งต่อไปนี้ :
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        {
          <CodeBlock
            element={
              <pre>
                npm install pdfmake <span style={{ color: "red" }}>--save</span>
              </pre>
            }
          />
        }
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p style={{ textIndent: "1.5rem" }}>
          โดย --save จะเป็นการบันทึกโมดูลลงในไฟล์ package.json ของโปรเจค
          ซึ่งจะช่วยให้สามารถติดตั้งโมดูลนี้ในโปรเจคอื่น ๆ ได้อย่างง่ายดาย
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p style={{ textIndent: "1.5rem" }}>
          หลังจากติดตั้งแล้ว สามารถใช้งาน pdfmake ในโปรแกรม Node.js ได้โดย
          import หรือ require โมดูลนี้เข้ามาในโค้ดของโปรแกรม ตัวอย่างเช่น:
        </p>
      </div>
    </div>
  );
};
export default Install;
