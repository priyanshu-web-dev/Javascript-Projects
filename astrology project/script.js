const zodiacSigns = [
  "Aries","Taurus", "Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius", "Pisces"
];

const compliments = [
  "You have a natural leadership energy.",
  "Your confidence attracts opportunities.",
  "People trust your decisions easily.",
  "Your smile changes the mood of a room.",
  "You are emotionally stronger than you realize.",
  "Your creativity makes you stand out.",
  "You inspire others without trying.",
  "Your focus is your superpower.",
  "You handle pressure very gracefully.",
  "Your ideas are always unique.",
  "You are more capable than you think.",
  "Your presence brings positivity.",
  "You learn from mistakes quickly.",
  "You have a powerful intuition.",
  "Your honesty makes you respected.",
  "You radiate calm energy.",
  "Your hard work never goes unnoticed.",
  "You uplift people around you.",
  "Your determination is impressive.",
  "You are growing every single day.",
  "Your loyalty makes you rare.",
  "You are smarter than you give yourself credit for.",
  "Your kindness creates strong bonds.",
  "You naturally attract good vibes.",
  "Your patience gives you strength.",
  "You are built for bigger things.",
  "Your mindset is evolving beautifully.",
  "You bring balance wherever you go.",
  "Your energy feels motivating.",
  "You are stepping into your best version."
];

const victimCardCompliments = [
  "People often misunderstand your good intentions.",
  "You give more than you receive.",
  "Your kindness is sometimes taken for granted.",
  "You stay strong even when no one notices your struggles.",
  "You carry silent battles bravely.",
  "Others don’t always see your sacrifices.",
  "You deserve more appreciation.",
  "Your emotions are deeper than people realize.",
  "You often put others before yourself.",
  "You stay quiet even when hurt.",
  "Your loyalty sometimes costs you.",
  "You forgive faster than others deserve.",
  "You try hard even when exhausted.",
  "Your efforts go unnoticed many times.",
  "You hide pain behind a smile.",
  "You rarely complain despite pressure.",
  "You deserve better treatment.",
  "You are stronger than your situation.",
  "People rely on you too much.",
  "You absorb negativity but still stay calm.",
  "Your patience is tested often.",
  "You are too kind for harsh people.",
  "You keep supporting others silently.",
  "You don’t always get credit for your work.",
  "Your emotional strength is underrated.",
  "You tolerate more than you should.",
  "You carry responsibilities quietly.",
  "You stay mature in difficult times.",
  "You sacrifice more than others see.",
  "You deserve peace and recognition."
];

const recommendations = [
  "Trust your instincts today.",
  "Focus on one task at a time.",
  "Avoid unnecessary arguments.",
  "Take a short break to recharge.",
  "Start something you’ve been delaying.",
  "Spend time with positive people.",
  "Organize your thoughts before reacting.",
  "Be open to new opportunities.",
  "Avoid overthinking small issues.",
  "Invest time in learning something new.",
  "Practice patience in communication.",
  "Take care of your health first.",
  "Review your financial decisions.",
  "Stay consistent with your goals.",
  "Speak clearly about your needs.",
  "Let go of past negativity.",
  "Try a new approach at work.",
  "Spend time outdoors.",
  "Listen more than you speak today.",
  "Avoid impulsive decisions.",
  "Complete pending tasks.",
  "Stay disciplined with your routine.",
  "Reconnect with old friends.",
  "Plan your week properly.",
  "Focus on self-improvement.",
  "Stay calm under pressure.",
  "Be flexible with changes.",
  "Avoid distractions.",
  "Set small achievable goals.",
  "Reflect before making promises."
];

const predictions = [
  "A new opportunity is approaching.",
  "Someone unexpected will contact you.",
  "Financial improvement is possible soon.",
  "You may face a small challenge this week.",
  "Your hard work will bring results.",
  "A positive shift is coming in your career.",
  "You will gain clarity about a confusion.",
  "Good news may arrive soon.",
  "You will reconnect with someone important.",
  "An important decision is near.",
  "Your patience will be rewarded.",
  "A surprise moment will lift your mood.",
  "You may discover a hidden talent.",
  "A leadership role could come your way.",
  "Your confidence will increase.",
  "You will overcome a recent obstacle.",
  "A travel plan may form soon.",
  "Someone will appreciate your effort.",
  "You may receive financial advice.",
  "Your energy will feel balanced.",
  "A creative idea will spark success.",
  "You will feel emotionally stronger.",
  "A new friendship may begin.",
  "Your communication will improve relationships.",
  "You will learn something valuable.",
  "A delayed task will finally complete.",
  "Luck will favor your bold move.",
  "You may receive recognition.",
  "Your consistency will pay off.",
  "A peaceful phase is ahead."
];

const parent = document.querySelector('#parent');
const result = document.querySelector('#result')

parent.addEventListener('submit',(e)=>{
      e.preventDefault();

      const Name = document.getElementById('Name').value;
      const Surname = document.getElementById('Surname').value;
      const Day = parseInt(document.getElementById('Day').value);
      const Month = parseInt(document.getElementById('Month').value);
      const Year = parseInt(document.getElementById('Year').value);

      const text =`Hii ${Name} ${Surname},your ZodiaxSigns is ${zodiacSigns[Month+4-2] }.. ${compliments[Day-2]}..${victimCardCompliments[Year%30]}..${recommendations[Math.ceil(Math.random()*20+6*2)]}.. ${predictions[Name.length+Surname.length]}..thanku to choose my platform`;

      result.textContent = text;
      e.reset();

})