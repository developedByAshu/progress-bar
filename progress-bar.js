/**
 * Only for logging purposes (helps in testing locally)
 * Progress bar for the job
 *
 * @param {number} progress The progress of the job
 */
const progressBar = (progress) => {
  const percent = Number(progress.toFixed(2));
  const width = 40;
  const filled = Math.round((percent / 100) * width);
  const bar = '█'.repeat(filled) + '-'.repeat(width - filled);

  console.log(`\n${'═'.repeat(60)}`);
  console.log('🚀 Progress Update'.padStart(35));
  console.log(`${'═'.repeat(60)}`);
  console.log(`| ${bar} | ${percent}%`);
  console.log(`${'═'.repeat(60)}`);
};
