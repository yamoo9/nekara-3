// React 모듈 추출
const { React: { useState, useCallback }, } = window;

function App() {
  const MIN = 33;
  const MAX = 99;
  const FPS = 1000 / 60;

  const [retryKey, setRetryKey] = useState(100);
  const [isDisable, setIsDisable] = useState(false);

  const updateRetryKey = useCallback(() => {
    setRetryKey((key) => key + 1);
    setIsDisable(false);
  }, []);

  const completeCallback = useCallback(() => setIsDisable(true), []);

  return (
    <div className="app">
      <RandomCounter
        key={retryKey}
        min={MIN}
        max={MAX}
        fps={FPS}
        onComplete={completeCallback}
      />
      <RetryButton onRetry={updateRetryKey} isDisabled={!isDisable} />
    </div>
  );
}
