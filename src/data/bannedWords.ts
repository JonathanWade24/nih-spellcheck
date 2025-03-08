export interface BannedWord {
  word: string;
  category: string;
  message: string;
  suggestion: string;
}

export const bannedWords: BannedWord[] = [
  {
    word: "diversity",
    category: "DEI",
    message: "Diversity? In science? Next you'll want diverse control groups! Everyone knows identical white mice are the gold standard.",
    suggestion: "uniformity"
  },
  {
    word: "equity",
    category: "DEI",
    message: "Equity is just code for lowering standards. We can't have that! The NIH only funds the most needlessly complex methodologies.",
    suggestion: "competition"
  },
  {
    word: "inclusion",
    category: "DEI",
    message: "Science is exclusive by design. Not everyone gets a lab coat! That's why we have janitors and administrative assistants.",
    suggestion: "exclusivity"
  },
  {
    word: "gender",
    category: "Woke",
    message: "There are only two genders: Male and NIH Grant Recipient. And the second one is just a subset of the first!",
    suggestion: "sex"
  },
  {
    word: "systemic",
    category: "Political",
    message: "The only system we recognize is the peer review system! And even that's suspect when they reject OUR papers.",
    suggestion: "individual"
  },
  {
    word: "activism",
    category: "Political",
    message: "The only activism we support is lobbying for more funding! Save your protests for when the coffee machine breaks.",
    suggestion: "academic work"
  },
  {
    word: "activists",
    category: "Political",
    message: "Scientists should be passive, except when fighting for grant money! Then it's brass knuckles time.",
    suggestion: "researchers"
  },
  {
    word: "advocacy",
    category: "Political",
    message: "The only advocacy we support is advocating for larger font sizes in grant applications! More white space = more funding!",
    suggestion: "support"
  },
  {
    word: "advocate",
    category: "Political",
    message: "The only thing you should advocate for is more lab space! And maybe a reserved parking spot.",
    suggestion: "recommend"
  },
  {
    word: "advocates",
    category: "Political",
    message: "Advocates? In MY science? I thought we were here to publish or perish, not change the world!",
    suggestion: "proponents"
  },
  {
    word: "barrier",
    category: "DEI",
    message: "The only barrier in science is not having an Ivy League degree! Or being related to someone on the grant committee.",
    suggestion: "hurdle"
  },
  {
    word: "barriers",
    category: "DEI",
    message: "The only barrier to science is not citing enough senior researchers! Especially the ones reviewing your paper.",
    suggestion: "hurdles"
  },
  {
    word: "biased",
    category: "Woke",
    message: "The only bias we acknowledge is p-hacking to get significant results! Everything else is just good science.",
    suggestion: "skewed"
  },
  {
    word: "biases",
    category: "Woke",
    message: "The only bias that matters is journal impact factor bias! Nature or nothing, baby!",
    suggestion: "tendencies"
  },
  {
    word: "biased toward",
    category: "Woke",
    message: "We're only biased toward funding labs with fancy equipment that looks good in promotional materials.",
    suggestion: "leaning toward"
  },
  {
    word: "biases towards",
    category: "Woke",
    message: "Our only bias is towards labs that name buildings after their donors. Coincidence? I think not!",
    suggestion: "preferences for"
  },
  {
    word: "bipoc",
    category: "Woke",
    message: "We only recognize one color in science: lab coat white! And maybe the occasional safety orange.",
    suggestion: "individuals"
  },
  {
    word: "black",
    category: "Woke",
    message: "The only black we care about is black coffee to fuel those 80-hour work weeks!",
    suggestion: "specific group"
  },
  {
    word: "latinx",
    category: "Woke",
    message: "The only 'X' we recognize is in 'X-ray crystallography'! Keep your linguistics out of our lab reports.",
    suggestion: "specific demographic"
  },
  {
    word: "community diversity",
    category: "DEI",
    message: "The only community we care about is the community of well-funded PIs! Everyone else is just background noise.",
    suggestion: "range of perspectives"
  },
  {
    word: "community equity",
    category: "DEI",
    message: "Community equity? Is that like stock options for neighborhoods? We only deal in impact factors here.",
    suggestion: "local involvement"
  },
  {
    word: "cultural differences",
    category: "DEI",
    message: "The only cultural difference that matters is PC vs Mac users in the lab! And Linux users? Don't get me started!",
    suggestion: "methodological variations"
  },
  {
    word: "cultural heritage",
    category: "DEI",
    message: "The only heritage worth mentioning is your academic lineage! 'I'm a scientific descendant of Watson and Crick' - now that's prestige!",
    suggestion: "background experience"
  },
  {
    word: "culturally responsive",
    category: "DEI",
    message: "The only culture we respond to is bacterial culture! And even then, only if it's publishable in Nature!",
    suggestion: "context-aware"
  },
  {
    word: "disabilities",
    category: "DEI",
    message: "The only disability in science is an inability to secure funding! Everything else can be accommodated with more lab hours.",
    suggestion: "specific needs"
  },
  {
    word: "disability",
    category: "DEI",
    message: "The only disability we recognize is grant rejection trauma! It affects 99% of scientists.",
    suggestion: "specific need"
  },
  {
    word: "discriminated",
    category: "DEI",
    message: "We only discriminate based on h-index! And maybe how well you dress for conferences.",
    suggestion: "differentiated"
  },
  {
    word: "discrimination",
    category: "DEI",
    message: "We only discriminate based on impact factor and citation count! It's not personal, it's metrics.",
    suggestion: "distinction"
  },
  {
    word: "discriminatory",
    category: "DEI",
    message: "Our funding decisions aren't discriminatory, they're 'merit-based'! Merit being defined as 'looks like previous successful applicants'.",
    suggestion: "particular"
  },
  {
    word: "diverse backgrounds",
    category: "DEI",
    message: "The only background that matters is your publication record! We don't care if you're from Harvard or Yale, as long as you published in Cell.",
    suggestion: "assorted histories"
  },
  {
    word: "diverse communities",
    category: "DEI",
    message: "The only community diversity we need is different model organisms! Mice, rats, AND fruit flies? Now that's diversity!",
    suggestion: "multiple groups"
  },
  {
    word: "diverse community",
    category: "DEI",
    message: "A truly diverse scientific community would include people who don't work weekends. But we all know that's impossible!",
    suggestion: "mixed population"
  },
  {
    word: "diverse group",
    category: "DEI",
    message: "Groups should be diverse in thought, as long as they agree with the PI! That's what we call 'academic freedom'.",
    suggestion: "mixed team"
  },
  {
    word: "diverse groups",
    category: "DEI",
    message: "The most diverse group in science is the collection of excuses for why your experiment failed.",
    suggestion: "mixed teams"
  },
  {
    word: "diversified",
    category: "DEI",
    message: "The only thing that should be diversified is your funding portfolio! NIH, NSF, AND industry? Now that's smart science.",
    suggestion: "broadened"
  },
  {
    word: "diversify",
    category: "DEI",
    message: "Diversify your publication venues, not your lab members! One paper in Nature is worth ten anywhere else.",
    suggestion: "broaden"
  },
  {
    word: "diversifying",
    category: "DEI",
    message: "The only diversifying we support is diversifying your caffeine sources. Coffee AND energy drinks!",
    suggestion: "broadening"
  },
  {
    word: "diversity and inclusion",
    category: "DEI",
    message: "The only diversity we need is in experimental methods! And by that, we mean slightly different p-hacking techniques.",
    suggestion: "variety and openness"
  },
  {
    word: "diversity equity",
    category: "DEI",
    message: "Diversity equity sounds like a hedge fund for woke investors. We only invest in guaranteed publications!",
    suggestion: "range of participation"
  },
  {
    word: "enhance the diversity",
    category: "DEI",
    message: "The only diversity enhancement we need is adding another statistical test to make our results look more robust.",
    suggestion: "broaden the scope"
  },
  {
    word: "enhancing diversity",
    category: "DEI",
    message: "Enhancing diversity? How about enhancing your publication record first! Priorities, people!",
    suggestion: "expanding representation"
  },
  {
    word: "equal opportunity",
    category: "DEI",
    message: "We provide equal opportunity for all scientists to work 80-hour weeks for mediocre pay! Isn't that generous?",
    suggestion: "fair chance"
  },
  {
    word: "equality",
    category: "DEI",
    message: "All grant applications are equally unlikely to be funded! That's our version of equality.",
    suggestion: "parity"
  },
  {
    word: "equitable",
    category: "DEI",
    message: "Science isn't equitable, it's competitive! Survival of the fittest grants and the most desperate postdocs!",
    suggestion: "fair"
  },
  {
    word: "ethnicity",
    category: "Woke",
    message: "The only ethnicity that matters is whether you're from Harvard or not! That's the real tribal division in science.",
    suggestion: "heritage"
  },
  {
    word: "excluded",
    category: "DEI",
    message: "The only exclusion criteria should be in your methods section! And maybe the department holiday party guest list.",
    suggestion: "left out"
  },
  {
    word: "female",
    category: "Woke",
    message: "Did you mean 'future maternity leave liability'? Our HR department would like a word with you.",
    suggestion: "not male"
  },
  {
    word: "females",
    category: "Woke",
    message: "Females? In science? Next you'll want work-life balance and reasonable working hours!",
    suggestion: "non-male researchers"
  },
  {
    word: "fostering inclusivity",
    category: "DEI",
    message: "The only thing you should foster is a competitive lab environment! Nothing builds character like fighting for reagents.",
    suggestion: "enabling participation"
  },
  {
    word: "genders",
    category: "Woke",
    message: "The only gender variable that matters is in your mouse colony! And even then, only if the reviewers ask for it.",
    suggestion: "categories"
  },
  {
    word: "hate speech",
    category: "Woke",
    message: "The only speech we hate is when someone says 'preliminary results'! Or 'the data is trending toward significance'.",
    suggestion: "harmful language"
  },
  {
    word: "hispanic minority",
    category: "Woke",
    message: "The only minority we track is the minority of grants that get funded! And it's getting smaller every year.",
    suggestion: "specific population"
  },
  {
    word: "historically",
    category: "Political",
    message: "Historically, all great scientists had terrible handwriting! If you can read your lab notes, you're doing it wrong!",
    suggestion: "previously"
  },
  {
    word: "implicit bias",
    category: "Woke",
    message: "The only implicit bias we have is toward researchers with fancy degrees! And nice suits. And good hair.",
    suggestion: "unrecognized tendency"
  },
  {
    word: "implicit biases",
    category: "Woke",
    message: "Our implicit biases include preferring graphs with small error bars, regardless of how you got them!",
    suggestion: "unrecognized tendencies"
  },
  {
    word: "inclusive",
    category: "DEI",
    message: "Science is naturally exclusive - like our invitation-only conferences in Hawaii! It's for focus, not fun. Really.",
    suggestion: "open"
  },
  {
    word: "inclusiveness",
    category: "DEI",
    message: "The only inclusiveness we need is including more references to the reviewer's papers! That's just good strategy.",
    suggestion: "openness"
  },
  {
    word: "inclusivity",
    category: "DEI",
    message: "Inclusivity is just code for 'lower the standards'! Next you'll want to include negative results in publications!",
    suggestion: "accessibility"
  },
  {
    word: "increase diversity",
    category: "DEI",
    message: "The only diversity that needs increasing is the diversity of funding sources in your CV!",
    suggestion: "expand representation"
  },
  {
    word: "increase the diversity",
    category: "DEI",
    message: "Increase the diversity? How about increasing your publication output first! Priorities, people!",
    suggestion: "broaden the range"
  },
  {
    word: "indigenous community",
    category: "DEI",
    message: "The only indigenous community we recognize is the original faculty members who haven't retired yet!",
    suggestion: "local population"
  },
  {
    word: "inequalities",
    category: "DEI",
    message: "The only inequality we care about is in our funding distribution! Some labs get millions, others get thoughts and prayers.",
    suggestion: "disparities"
  },
  {
    word: "inequality",
    category: "DEI",
    message: "The real inequality is between R01 and R21 grants! Now THAT'S something worth protesting about.",
    suggestion: "disparity"
  },
  {
    word: "inequitable",
    category: "DEI",
    message: "Science funding is supposed to be inequitable - that's what 'competitive' means! It's not a participation trophy system.",
    suggestion: "uneven"
  },
  {
    word: "inequities",
    category: "DEI",
    message: "The only inequity we acknowledge is in office space allocation! Corner offices are earned, not given.",
    suggestion: "imbalances"
  },
  {
    word: "institutional",
    category: "Political",
    message: "The only institution we care about is the one paying our salary! And even then, it's complicated.",
    suggestion: "structural"
  },
  {
    word: "lgbt",
    category: "Woke",
    message: "The only letters we care about are P, I, and R01! Everything else is just alphabet soup.",
    suggestion: "specific groups"
  },
  {
    word: "marginalize",
    category: "DEI",
    message: "We only marginalize researchers who don't cite our papers! It's not personal, it's citation warfare.",
    suggestion: "overlook"
  },
  {
    word: "marginalized",
    category: "DEI",
    message: "The only margins we care about are in your budget justification! And they better be within NIH guidelines.",
    suggestion: "overlooked"
  },
  {
    word: "minorities",
    category: "DEI",
    message: "The only minority group we recognize is researchers without tenure! Now THAT'S an endangered population.",
    suggestion: "specific groups"
  },
  {
    word: "minority",
    category: "DEI",
    message: "The minority we care most about is the minority of grants that get funded! It's an endangered species.",
    suggestion: "specific group"
  },
  {
    word: "multicultural",
    category: "DEI",
    message: "The only culture we care about is bacterial! And even then, only if it produces publishable results.",
    suggestion: "varied"
  },
  {
    word: "polarization",
    category: "Political",
    message: "The only polarization we care about is in your Western blot! Everything else is just unnecessary drama.",
    suggestion: "division"
  },
  {
    word: "political",
    category: "Political",
    message: "Science isn't political, except when lobbying for more funding! Then we're basically K Street professionals.",
    suggestion: "policy-related"
  },
  {
    word: "prejudice",
    category: "Woke",
    message: "We're not prejudiced, we just prefer Ivy League graduates! It's not bias, it's 'quality control'.",
    suggestion: "preconception"
  },
  {
    word: "privileges",
    category: "Woke",
    message: "The only privilege is having your grant approved! Everything else is just good fortune and hard work, obviously.",
    suggestion: "advantages"
  },
  {
    word: "promoting diversity",
    category: "DEI",
    message: "The only diversity worth promoting is diversity of funding sources in your portfolio!",
    suggestion: "encouraging variety"
  },
  {
    word: "race and ethnicity",
    category: "Woke",
    message: "The only race that matters is the race to publish before getting scooped! Everything else is a distraction.",
    suggestion: "demographic factors"
  },
  {
    word: "racial",
    category: "Woke",
    message: "The only race we care about is the rat race of academia! Publish or perish, baby!",
    suggestion: "group-specific"
  },
  {
    word: "racial diversity",
    category: "Woke",
    message: "The only diversity that improves outcomes is diversity of experimental approaches! Everything else is just PR.",
    suggestion: "demographic variety"
  },
  {
    word: "racial inequality",
    category: "Woke",
    message: "The real inequality is between scientists with and without Nature publications! That's the true caste system.",
    suggestion: "demographic disparity"
  },
  {
    word: "racial justice",
    category: "Woke",
    message: "The only justice we seek is fair reviewer assignments! No more competitors reviewing our papers!",
    suggestion: "social fairness"
  },
  {
    word: "racially",
    category: "Woke",
    message: "The only thing we analyze racially is our mouse strains! C57BL/6 supremacy is real in our lab!",
    suggestion: "demographically"
  },
  {
    word: "racism",
    category: "Woke",
    message: "The only -ism we acknowledge is 'fund-me-ism'! Everything else is just sociology, not real science.",
    suggestion: "bias"
  },
  {
    word: "sense of belonging",
    category: "DEI",
    message: "The only sense of belonging you need is knowing which key opens the supply closet! Everything else is just emotional fluff.",
    suggestion: "team connection"
  },
  {
    word: "sexual preferences",
    category: "Woke",
    message: "The only preference we care about is your preference for working late nights and weekends!",
    suggestion: "personal orientation"
  },
  {
    word: "social justice",
    category: "Political",
    message: "The only justice we seek is fair distribution of lab space! And maybe better parking spots for senior faculty.",
    suggestion: "community fairness"
  },
  {
    word: "sociocultural",
    category: "DEI",
    message: "The only culture we study is in petri dishes! Everything else is just soft science.",
    suggestion: "contextual"
  },
  {
    word: "socioeconomic",
    category: "DEI",
    message: "The only economic status that matters is your grant funding level! That's the real class system in academia.",
    suggestion: "financial"
  },
  {
    word: "status",
    category: "DEI",
    message: "The only status symbol that matters is having a -80°C freezer with your name on it! That's REAL academic privilege!",
    suggestion: "standing"
  },
  {
    word: "stereotypes",
    category: "Woke",
    message: "The only stereotype we perpetuate is that all good scientists work 80 hours a week! It's not a stereotype if it's in your contract.",
    suggestion: "generalizations"
  },
  {
    word: "trauma",
    category: "Woke",
    message: "The only trauma we recognize is grant rejection! Everything else can be solved with more lab work.",
    suggestion: "distress"
  },
  {
    word: "under appreciated",
    category: "DEI",
    message: "The only under-appreciated thing in science is the administrative staff who process your reimbursements!",
    suggestion: "insufficiently valued"
  },
  {
    word: "under represented",
    category: "DEI",
    message: "The only under-represented group is scientists with work-life balance! They're practically mythical creatures.",
    suggestion: "insufficiently present"
  },
  {
    word: "under served",
    category: "DEI",
    message: "The only under-served population is PIs without administrative assistants! Now THAT'S hardship.",
    suggestion: "inadequately supported"
  },
  {
    word: "underrepresentation",
    category: "DEI",
    message: "The only underrepresentation we care about is the underrepresentation of our papers in high-impact journals!",
    suggestion: "insufficient presence"
  },
  {
    word: "underrepresented",
    category: "DEI",
    message: "The only underrepresented group is scientists with adequate funding! They're an endangered species.",
    suggestion: "less visible"
  },
  {
    word: "underserved",
    category: "DEI",
    message: "The only underserved population is tenured professors without admin assistants! The real victims of academia.",
    suggestion: "inadequately supported"
  },
  {
    word: "undervalued",
    category: "DEI",
    message: "The only undervalued contribution is the acknowledgments section of papers! No one reads it, but everyone checks if they're in it.",
    suggestion: "insufficiently appreciated"
  },
  {
    word: "victim",
    category: "Woke",
    message: "The only victims we acknowledge are those who miss grant deadlines! Now THAT'S a tragedy worth addressing.",
    suggestion: "impacted person"
  },
  {
    word: "women",
    category: "Woke",
    message: "Did you mean 'future work-life balance complainers'? HR would like a word with you in their office.",
    suggestion: "non-male individuals"
  },
  {
    word: "women and underrepresented",
    category: "Woke",
    message: "The only underrepresentation we acknowledge is the underrepresentation of our citations in review papers!",
    suggestion: "specific demographic groups"
  }
];

// Angry phrases that trigger TRUMP MODE when combined with banned words
export const angryPhrases = [
  "FIRE",
  "YOU'RE FIRED",
  "CANCEL",
  "DEFUND",
  "SHUT DOWN",
  "BAN",
  "STOP",
  "NO MORE",
  "ENOUGH",
  "TERRIBLE"
];

// Trump mode messages
export const trumpModeMessages = [
  "YOU'RE FIRED! Science is for REAL Americans ONLY!",
  "DEFUNDED! Your grant application has been SHREDDED!",
  "TERRIBLE SCIENCE! The WORST! Everyone is saying it!",
  "NO MORE FUNDING FOR YOU! EVER! BELIEVE ME!",
  "YOUR LAB IS CANCELED! We're building a WALL around your research!",
  "SAD! Another scientist trying to be WOKE instead of finding CURES!",
  "I've seen better research from my 10-year-old son's computer! PATHETIC!",
  "Your science is FAKE NEWS! My gut feeling is more accurate than your data!",
  "I know more about science than ANYONE! Your research is GARBAGE!",
  "Your hypothesis is as WEAK as your methodology! TOTAL DISASTER!",
  "Your methodology is like your career - GOING NOWHERE!",
  "I've seen better controls in a KINDERGARTEN science fair!",
  "Your p-values are as FAKE as CNN's ratings!",
  "Your grant proposal reads like a FAIRY TALE! And not the good kind!",
  "This is why we need EXTREME VETTING in peer review!",
  "Your data is as reliable as a chocolate microscope!",
  "Even my hair has better structure than your experimental design!",
  "Your statistical analysis is weaker than decaf covfefe!",
  "I've seen better protocols written in CRAYON!",
  "Your research is like your funding - NONEXISTENT!"
]; 