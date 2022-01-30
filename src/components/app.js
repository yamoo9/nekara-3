function App() {

  const MIN = 33;
  const MAX = 99;
  const FPS = 1000 / 60;
  
  const [retryKey, setRetryKey] = React.useState(100);
  const [isDisable, setIsDisable] = React.useState(false);

  const updateRetryKey = React.useCallback(() => {
    setRetryKey((key) => key + 1);
    setIsDisable(false);
  }, []);

  const completeCallback = React.useCallback(() => setIsDisable(true), []);

  return (
    <div className="app">
      <RandomCounter key={retryKey} min={MIN} max={MAX} fps={FPS} onComplete={completeCallback} />
      <RetryButton onRetry={updateRetryKey} isDisabled={!isDisable} />
    </div>
  );
}
