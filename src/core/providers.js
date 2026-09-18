import{compileUniversal}from'./compiler.js';
function body(c,p){return compileUniversal(c,p).text}
export const profiles={universal:{id:'universal',surface:'portable',status:'stable'},openai:{id:'openai',surface:'chat',status:'structural-guidance'},gemini:{id:'gemini',surface:'chat',status:'structural-guidance'},grok:{id:'grok',surface:'consumer',status:'structural-guidance'},'grok-api':{id:'grok-api',surface:'api',status:'surface-specific'},'grok-x':{id:'grok-x',surface:'x-reply',status:'surface-specific'}};
export function compileTarget(c,p,target='universal'){
 const u=body(c,p);
 if(target==='universal')return{id:'ART-UNIVERSAL',target,format:'markdown',text:u};
 if(target==='openai')return{id:'ART-OPENAI',target,format:'markdown',text:`# SYSTEM INSTRUCTION\n\n## ROLE\nAct as an execution specialist responsible for producing the requested artifact accurately.\n\n${u}\n\n## PRIORITY\n1. Platform and safety requirements\n2. User objective\n3. Mandatory requirements\n4. Output contract\n5. Style preferences`};
 if(target==='gemini')return{id:'ART-GEMINI',target,format:'xml',text:`<system_instruction>\n  <role>Execute the validated task specification without inventing facts or capabilities.</role>\n  <grounding>Preserve evidence boundaries and mark unavailable information.</grounding>\n</system_instruction>\n<task_specification>\n${u}\n</task_specification>\n<final_task>Execute every applicable requirement and validate the requested output.</final_task>`};
 if(target==='grok-x')return{id:'ART-GROK-X',target,format:'plain-text',text:`${c.objective.value}. Use live sources only if this surface can search. Cite current claims, distinguish fact from X sentiment, state unknowns, and return only the requested artifact.`};
 if(target==='grok-api')return{id:'ART-GROK-API',target,format:'json',text:JSON.stringify({surface:'xai-api',instructions:u,toolsRequired:c.capabilities.includes('research')?['web_search','x_search']:[],note:'Tool names describe required configuration; PromptCrafter does not execute them.'},null,2)};
 return{id:'ART-GROK',target,format:'markdown',text:`# INSTRUCTIONS\n\nUse concise imperative sections. Do not invent live-data access.\n\n${u}`}
}
