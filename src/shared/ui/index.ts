export { FadeIn } from "./FadeIn";
export { Reveal } from "./Reveal";
// ВНИМАНИЕ: `Background` (three.js, ~570 КБ) НЕ реэкспортируем из этого barrel.
// Он статически связан с виджетами (About/Stack/ProjectsSection импортируют
// Reveal и т.п. отсюда) — реэкспорт three.js затягивал WebGL в initial-чанк
// главной. Фон подключается только через ClientBackground (lazy, async-чанк).
export { ClientBackground } from "./Background";
export { Button } from "./Button";
export { DecryptedText } from "./DecryptedText";
export { ErrorBoundary } from "./ErrorBoundary";
export { FuzzyText } from "./FuzzyText";
export { GlitchText } from "./GlitchText";
export { LoadingFallback } from "./LoadingFallback";
export { PwaRegister } from "./PwaRegister";
export { usePerformanceMode } from "./hooks/usePerformanceMode";
export { useDeferredMount } from "./hooks/useDeferredMount";
