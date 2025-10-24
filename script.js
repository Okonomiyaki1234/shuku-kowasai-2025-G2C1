function getRandomCottonCandy() {
  const bases = ["ノーマル", "いちご", "レモン", "ブルーハワイ"];
  const options = ["チョコスプレー", "マシュマロ", "パチパチパニック"];

  // ベースをランダムに1つ選ぶ
  const base = bases[Math.floor(Math.random() * bases.length)];

  // オプション数をランダムに決定（0〜3個）
  const optionCount = Math.floor(Math.random() * (options.length + 1));

  // オプションをシャッフルして、先頭から optionCount 個を選ぶ
  const shuffledOptions = options.sort(() => Math.random() - 0.5);
  const selectedOptions = shuffledOptions.slice(0, optionCount);

  // 結果を出力
  alert(`あなたにオススメのわたあめは…「${base}」です。`);
  alert(
    selectedOptions.length > 0
      ? `トッピングは${selectedOptions.join("・")}がオススメですね。`
      : "トッピングはシンプルになしがオススメですよ。"
  );
}