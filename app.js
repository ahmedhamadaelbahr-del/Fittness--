var EX=[
{n:"Squat",m:"Legs",l:"Beginner",e:"Barbell or bodyweight",s:["Stand with feet shoulder-width apart, toes slightly out.","Brace your core and keep your chest up.","Push your hips back and bend your knees until thighs are parallel to the floor.","Drive through your whole foot to stand up."],t:"Keep your knees tracking over your toes.",x:"Knees caving inward or heels lifting off the floor."},
{n:"Deadlift",m:"Back",l:"Intermediate",e:"Barbell",s:["Stand with the bar over mid-foot, feet hip-width apart.","Hinge at the hips and grip the bar just outside your legs.","Flatten your back and pull the slack out of the bar.","Push the floor away, standing tall with hips and knees together.","Lower the bar by hinging at the hips first."],t:"Keep the bar touching your legs the whole way.",x:"Rounding the lower back or jerking the bar off the floor."},
{n:"Bench press",m:"Chest",l:"Beginner",e:"Barbell, bench",s:["Lie on the bench with eyes under the bar and feet flat.","Pull your shoulder blades back and down.","Unrack and lower the bar to mid-chest with elbows about 45° from your body.","Press up until your arms are straight."],t:"Ask a spotter for heavy sets.",x:"Bouncing the bar off the chest or flaring elbows wide."},
{n:"Push-up",m:"Chest",l:"Beginner",e:"Bodyweight",s:["Place hands slightly wider than shoulders.","Make a straight line from head to heels.","Lower your chest to just above the floor.","Press back up without letting hips sag."],t:"Too hard? Start with hands on a bench.",x:"Sagging hips or half reps."},
{n:"Lat pulldown",m:"Back",l:"Beginner",e:"Cable machine",s:["Sit down and set the pad on top of your thighs.","Grip the bar wider than shoulders.","Lean back slightly and pull the bar to your upper chest.","Squeeze your back, then let the bar rise slowly."],t:"Think of pulling with your elbows, not your hands.",x:"Swinging your body or pulling the bar behind your neck."},
{n:"Barbell row",m:"Back",l:"Intermediate",e:"Barbell",s:["Hold the bar and hinge forward until your torso is near 45°.","Keep your back flat and knees slightly bent.","Pull the bar to your lower ribs.","Lower with control."],t:"Squeeze your shoulder blades together at the top.",x:"Standing too upright and using momentum."},
{n:"Overhead press",m:"Shoulders",l:"Intermediate",e:"Barbell or dumbbells",s:["Hold the bar at shoulder height, elbows slightly in front.","Squeeze your glutes and brace your core.","Press the bar straight up, moving your head through at the top.","Lower back to your shoulders."],t:"Keep your ribs down so you do not arch.",x:"Leaning back and turning it into an incline press."},
{n:"Lateral raise",m:"Shoulders",l:"Beginner",e:"Dumbbells",s:["Stand holding light dumbbells at your sides.","Raise your arms out to the side up to shoulder height.","Pause for a second, then lower slowly."],t:"Use light weight. Lead with your elbows.",x:"Swinging the weights up with your body."},
{n:"Biceps curl",m:"Arms",l:"Beginner",e:"Dumbbells",s:["Stand with dumbbells at your sides, palms forward.","Curl the weights up while keeping elbows by your ribs.","Squeeze at the top, then lower slowly."],t:"Take 3 seconds to lower each rep.",x:"Swinging the torso to lift heavier."},
{n:"Triceps dip",m:"Arms",l:"Beginner",e:"Bench or parallel bars",s:["Place hands on a bench behind you, legs forward.","Bend your elbows to about 90°.","Press up until your arms are straight."],t:"Keep your shoulders away from your ears.",x:"Going too deep and straining the shoulders."},
{n:"Lunge",m:"Legs",l:"Beginner",e:"Bodyweight or dumbbells",s:["Stand tall, then step forward with one leg.","Lower until both knees reach about 90°.","Push through the front heel to return.","Switch legs."],t:"Take a long enough step so your front knee stays over your ankle.",x:"Letting the front knee fall inward."},
{n:"Plank",m:"Core",l:"Beginner",e:"Bodyweight",s:["Rest on your forearms with elbows under shoulders.","Squeeze glutes and abs so your body is one straight line.","Breathe steadily and hold for 20–60 seconds."],t:"Stop when your form breaks, not when it burns.",x:"Hips too high or sagging low."}
];
EX.push(
{n:'Romanian deadlift',m:'Legs',l:'Intermediate',e:'Dumbbells or barbell',s:['Stand tall holding weights against your thighs, knees slightly bent.','Brace your core and push your hips backward, keeping weights close to your legs.','Stop when you feel a hamstring stretch and can still keep a neutral spine.','Drive your hips forward to stand tall.'],t:'Keep your knee angle mostly unchanged throughout the movement.',x:'Rounding your back to lower the weights further.'},
{n:'Goblet squat',m:'Legs',l:'Beginner',e:'Dumbbell or kettlebell',s:['Hold a weight close to your chest with both hands.','Stand slightly wider than hip-width with toes turned out.','Sit down between your hips, keeping your heels grounded.','Push the floor away to stand.'],t:'Choose a depth you can control with a neutral spine.',x:'Letting your chest collapse forward.'},
{n:'Glute bridge',m:'Legs',l:'Beginner',e:'Bodyweight',s:['Lie on your back with knees bent and feet flat.','Brace your core and press through your heels.','Lift your hips until shoulders, hips and knees form a line.','Pause, then lower slowly.'],t:'Squeeze your glutes rather than arching your back.',x:'Pushing into excessive lower-back extension.'},
{n:'Hammer curl',m:'Arms',l:'Beginner',e:'Dumbbells',s:['Stand with a dumbbell in each hand, palms facing inward.','Keep elbows close to your sides as you bend them.','Raise the weights toward your shoulders without swinging.','Lower slowly to the starting position.'],t:'Keep wrists neutral from start to finish.',x:'Using your hips to swing the weights up.'},
{n:'Incline dumbbell press',m:'Chest',l:'Beginner',e:'Dumbbells and adjustable bench',s:['Set a bench to a low incline of about 30 degrees.','Hold dumbbells beside your upper chest with feet planted.','Press upward with your wrists stacked over your elbows.','Lower with control until your upper arms are near torso level.'],t:'Keep your shoulder blades gently pulled back.',x:'Setting the bench too steep or flaring your elbows.'},
{n:'Seated cable row',m:'Back',l:'Beginner',e:'Cable machine',s:['Sit tall with feet on the platforms and knees slightly bent.','Grip the handle and brace your torso.','Pull toward your lower ribs, driving elbows back.','Extend your arms slowly without rounding your back.'],t:'Keep your torso still as you row.',x:'Rocking back and forth to move the weight.'},
{n:'Dead bug',m:'Core',l:'Beginner',e:'Bodyweight',s:['Lie on your back with arms pointing up and knees bent at 90 degrees.','Gently press your lower back toward the floor.','Extend one arm and the opposite leg slowly.','Return, then switch sides while breathing steadily.'],t:'Shorten the reach if you cannot keep your back steady.',x:'Arching your lower back as your leg extends.'},
{n:'Face pull',m:'Shoulders',l:'Beginner',e:'Cable machine and rope',s:['Set a rope attachment at around face height.','Step back and stand with knees slightly bent.','Pull the rope toward your forehead, spreading the ends apart.','Return slowly while keeping your shoulders down.'],t:'Use a light load so you can control your shoulders.',x:'Shrugging or leaning back to lift a heavier weight.'}
);
const $=s=>document.querySelector(s);
const videos={'Squat':'ultWZbUMPL8','Deadlift':'op9kVnSso6Q','Bench press':'rT7DgCr-3pg','Push-up':'IODxDxX7oi4','Lat pulldown':'CAwf7n6Luuc','Barbell row':'FWJR5Ve8bnQ','Overhead press':'2yjwXTZQDDI','Lateral raise':'3VcKaXpzqRo','Biceps curl':'ykJmrZ5v0Oo','Triceps dip':'6kALZikXxLc','Lunge':'QOVaHwm-Q6U','Plank':'ASdvN_XEl_c','Romanian deadlift':'JCXUYuzwNrM','Goblet squat':'MeIiIdhvXT4','Glute bridge':'wPM8icPu6H8','Hammer curl':'zC3nLlEvin4','Incline dumbbell press':'8iPEnn-ltC8','Seated cable row':'GZbfZ033f74','Dead bug':'4XLEnwUr1d8','Face pull':'rep-qVOkqgk'};
const photos={Chest:'photo-1534438327276-14e5300c3a48',Back:'photo-1517836357463-d25dfeac3438',Legs:'photo-1574680096145-d05b474e2155',Shoulders:'photo-1534368270820-9de3d8053204',Arms:'photo-1581009146145-b5ef050c2e1e',Core:'photo-1518611012118-696072aa579a'};
const ordered=['Bench press','Squat','Lat pulldown','Overhead press','Biceps curl','Plank','Deadlift','Push-up'];
EX.sort((a,b)=>{let ai=ordered.indexOf(a.n),bi=ordered.indexOf(b.n);return(ai<0?100:ai)-(bi<0?100:bi)});
/* ===== Language (EN / AR) ===== */
let lang='en';
try{lang=localStorage.getItem('lang')||(/^ar/i.test(navigator.language||'')?'ar':'en')}catch(e){}
if(lang!=='ar'&&lang!=='en')lang='en';
const t=(k,...a)=>{const v=UI[lang][k]!==undefined?UI[lang][k]:UI.en[k];return typeof v==='function'?v(...a):v};
const L=(x,f)=>lang==='ar'?EX_AR[x.n][f]:x[f];
const nameOf=en=>lang==='ar'?EX_AR[en].n:en;
const fmt=n=>Number(n).toLocaleString('en-US');
let dialogView=null,lastCalc=null;

let group='All muscles',expanded=false;
const groups=['All muscles','Chest','Back','Legs','Shoulders','Arms','Core'];
for(const g of groups){const b=document.createElement('button');b.className='chip';b.dataset.g=g;b.setAttribute('aria-pressed',g===group);b.onclick=()=>{group=g;expanded=false;document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));render()};$('#chips').append(b)}

function render(){
const term=$('#search').value.toLowerCase().trim(),level=$('#level').value;
const matches=EX.filter(x=>(group==='All muscles'||x.m===group)&&(level==='All'||x.l===level)&&`${x.n} ${x.m} ${x.e} ${EX_AR[x.n].n} ${EX_AR[x.n].e} ${UI.ar['m_'+x.m]}`.toLowerCase().includes(term));
$('#result-count').textContent=t('count',matches.length);
$('#exercise-grid').replaceChildren();
for(const x of matches.slice(0,expanded?100:8)){
const card=document.createElement('button');card.className='exercise-card';card.setAttribute('aria-label',t('learn_aria',L(x,'n')));
card.innerHTML=`<div class="card-image"><img loading="lazy" src="https://images.unsplash.com/${photos[x.m]}?auto=format&fit=crop&w=600&q=80" alt="${t('img_alt',t('m_'+x.m))}"><span class="muscle-tag">${t('m_'+x.m)}</span><span class="play">▶</span></div><div class="card-body"><h3>${L(x,'n')}</h3><p>${L(x,'e')}</p><div class="card-bottom"><span class="difficulty"><i></i>${t('lvl_'+x.l)}</span><strong>${t('view_ex')}</strong></div></div>`;
card.onclick=()=>openExercise(x);$('#exercise-grid').append(card)}
if(!matches.length){$('#exercise-grid').innerHTML=`<div class="empty">${t('empty')}</div>`}
$('#show-more').hidden=matches.length<=8;
$('#show-more').innerHTML=expanded?t('show_less'):t('show_more')}
$('#search').addEventListener('input',render);$('#level').addEventListener('change',render);$('#show-more').onclick=()=>{expanded=!expanded;render()};

const dialog=$('#detail');$('.close').onclick=()=>dialog.close();
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{$('#detail-content').replaceChildren();dialogView=null});

function openExercise(x){
dialogView=()=>openExercise(x);
const video=videos[x.n];
$('#detail-content').innerHTML=`<div class="detail-tag">${t('m_'+x.m)} / ${t('lvl_'+x.l)}</div><h2>${L(x,'n')}</h2><p>${t('detail_sub',L(x,'e'))}</p><iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/${video}" title="${t('video_title',L(x,'n'))}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe><a class="video-link" href="https://www.youtube.com/watch?v=${video}" target="_blank" rel="noopener">${t('watch')}</a><h3>${t('how')}</h3><ol>${L(x,'s').map(s=>`<li>${s}</li>`).join('')}</ol><p class="detail-tip"><b>${t('cue')}</b> ${L(x,'t')}</p><p><b>${t('mistake')}</b> ${L(x,'x')}</p><p>${t('sets')}</p>`;
if(!dialog.open)dialog.showModal()}

const PLAN=[['plan_d1',['Goblet squat','Push-up','Seated cable row','Plank']],['plan_d2',['Lunge','Incline dumbbell press','Lat pulldown','Dead bug']],['plan_d3',['Glute bridge','Overhead press','Biceps curl','Plank']]];
function openPlan(){
dialogView=openPlan;
$('#detail-content').innerHTML=`<div class="detail-tag">${t('plan_tag')}</div><h2>${t('plan_h2')}</h2><p>${t('plan_p1')}</p>${PLAN.map(([d,list])=>`<div class="plan-day"><h3>${t(d)}</h3><p>${list.map(nameOf).join(' · ')}</p></div>`).join('')}<p class="detail-tip">${t('plan_tip')}</p><p>${t('plan_p2')}</p>`;
if(!dialog.open)dialog.showModal()}
$('#plan-button').onclick=openPlan;

function renderCalc(){
if(!lastCalc){$('#calorie-result').innerHTML='';return}
$('#calorie-result').innerHTML=`<span>${t('res_label')}</span><b>${fmt(lastCalc.target)} <small>${t('kcal')}</small></b><p>${t('res_p',fmt(lastCalc.maintenance))}</p>`}
$('#calorie-form').onsubmit=e=>{e.preventDefault();
const age=Number($('#age').value),weight=Number($('#weight').value),height=Number($('#height').value),activity=Number($('#activity').value),goal=Number($('#goal').value);
if(!(age>=18&&age<=90&&weight>=30&&weight<=250&&height>=120&&height<=230))return;
const bmr=10*weight+6.25*height-5*age+($('#sex').value==='m'?5:-161);
const maintenance=Math.round(bmr*activity),target=Math.round(maintenance+goal);
lastCalc={target,maintenance};renderCalc()};

function route(){
const hash=location.hash||'#home';
document.querySelectorAll('nav a').forEach(a=>{a.classList.toggle('active',a.hash===hash);if(a.hash===hash)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
const key={'#home':'nav_home','#exercises':'nav_ex','#workouts':'nav_work','#calories':'nav_cal'}[hash]||'nav_home';
$('#page-name').textContent=t(key)}
window.addEventListener('hashchange',route);

function applyLang(){
const h=document.documentElement;h.lang=lang;h.dir=lang==='ar'?'rtl':'ltr';
document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n)});
document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>el.setAttribute('placeholder',t(el.dataset.i18nPlaceholder)));
document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
document.title=t('title');$('#meta-desc').setAttribute('content',t('meta_desc'));
document.querySelectorAll('.chip').forEach(c=>c.textContent=t('m_'+c.dataset.g));
$('#exercise-total-title').textContent=`${EX.length} ${t('exercises_word')}`;
$('#lang-btn').setAttribute('aria-label',t('lang_aria'));
render();route();renderCalc();
if(dialog.open&&dialogView)dialogView();
try{localStorage.setItem('lang',lang)}catch(e){}}

$('#lang-btn').onclick=()=>{lang=lang==='ar'?'en':'ar';applyLang()};
$('#year').textContent=new Date().getFullYear();
applyLang();
