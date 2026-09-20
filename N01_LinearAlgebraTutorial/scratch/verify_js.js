const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('scratch/test_ch7_2.html', 'utf-8');

// Mock a minimal browser environment
const mockDocument = {
  getElementById: (id) => ({
    getContext: () => ({
      clearRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      fillText: () => {},
      arc: () => {},
      fill: () => {},
      setLineDash: () => {}
    }),
    addEventListener: () => {},
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 460, height: 360 })
  }),
  querySelectorAll: () => [],
  addEventListener: () => {}
};

const scriptRegex = /<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;

while ((match = scriptRegex.exec(html)) !== null) {
  const code = match[1].trim();
  if (!code || code.includes('src=')) continue;
  count++;
  console.log(`Testing inline script #${count}...`);
  try {
    const context = vm.createContext({
      window: { MathJax: {} },
      document: mockDocument,
      console: console,
      Math: Math
    });
    vm.runInContext(code, context);
    console.log(`Script #${count} syntax and execution OK!`);
  } catch (err) {
    console.error(`Error in script #${count}:`, err.message);
    process.exit(1);
  }
}
console.log(`All ${count} inline scripts verified successfully.`);
