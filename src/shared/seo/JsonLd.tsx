// Рендерит JSON-LD-скрипт в SSR-HTML, чтобы краулеры видели разметку
// сразу, без гидрации. Принимает объект или массив объектов schema.org.
export const JsonLd = ({ data }: { data: object | object[] }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
