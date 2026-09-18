export const TASK_PACKS={
 coding:{label:'Coding',checks:['runtime','inputs','outputs','dependencies','errors','tests','complete artifact']},
 research:{label:'Research',checks:['scope','currentness','sources','citations','contradictions','unknowns']},
 writing:{label:'Writing',checks:['audience','purpose','channel','tone','length','sections']},
 analysis:{label:'Analysis',checks:['criteria','evidence','inference','trade-offs','conclusion']},
 extraction:{label:'Extraction',checks:['source boundary','fields','schema','null policy','validation']},
 planning:{label:'Planning',checks:['objective','milestones','dependencies','risks','acceptance']},
 data:{label:'Data',checks:['schema','units','transformations','null policy','validation']},
 image:{label:'Image',checks:['subject','composition','environment','lighting','exclusions','aspect ratio']},
 system:{label:'System',checks:['role','authority','constraints','conflicts','output','validation']},
 agent:{label:'Agent',checks:['mission','tools','permissions','state','stops','recovery','approval']},
 general:{label:'General',checks:['objective','inputs','constraints','output']}
};
export const DEPTHS={quick:['objective','inputs','output'],balanced:['objective','inputs','constraints','output','ambiguity'],thorough:['objective','inputs','constraints','evidence','ambiguity','conflicts','acceptance'],mission:['objective','inputs','constraints','evidence','ambiguity','conflicts','workflow','risk','recovery','acceptance','handoff']};
export const TARGETS={universal:{label:'Universal',surface:'portable'},openai:{label:'OpenAI',surface:'chat'},gemini:{label:'Gemini',surface:'chat'},grok:{label:'Grok',surface:'consumer'},'grok-api':{label:'Grok API',surface:'api'},'grok-x':{label:'Grok on X',surface:'x-reply'}};
