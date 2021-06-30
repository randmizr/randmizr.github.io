import*as Status from"../boost/boost-status.js";import*as MainBoost from"../boost/mainboost.js";import*as ListBoost from"../boost/listboost.js";import*as SmallBoost from"../boost/smallboost.js";import*as IntegratedBoost from"../boost/integratedboost.js";import*as IntegratedListTable from"../boost/integratedlisttable.js";export function GetMainBoost(){"y"===Status.mainbooststatus&&MainBoost.list.forEach(t=>{if("y"===t.active)if(""===t.boost_location_id||null===t.boost_location_id||"undefined"===t.boost_location_id)alert("🤖 Error Code: EMBTE-00");else{let a=$("#"+t.boost_location_id);if(a.length){let o=MainBoostBuilder(t);a.append(o)}}})}function MainBoostBuilder(t){let a,o,i=$("<div class='main-boost'></div>"),e=$("<div class='card'></div>"),s=$("<div class='card-header'>⭐️ Star of the Week</div>"),n=$("<div class='card-title'>"+t.name+"</div>"),l=$("<div class='card-sub-title'>"+t.subname+"</div>"),r=$("<div class='card-text'>"+t.description+"</div>"),d=$("<button class='card-secondary-button'>"+t.action_secondary_text+"</button>"),c=$("<button class='card-primary-button'>"+t.action_text+"</button>");return e.append(s),e.append(n),e.append(l),e.append(r),"y"===t.secondary_is_link?a=$("<a href='"+t.action_secondary+"' target='_blank'></a>"):"y"===t.secondary_is_mail?a=$("<a href='mailto:"+t.action_secondary+"' target='_blank'></a>"):"y"===t.secondary_is_number&&(a=$("<a href='tel:"+t.action_secondary+"' target='_blank'></a>")),a.append(d),e.append(a),"y"===t.action_is_link?o=$("<a href='"+t.action+"' target='_blank'></a>"):"y"===t.action_is_mail?o=$("<a href='mailto:"+t.action+"' target='_blank'></a>"):"y"===t.action_is_number&&(o=$("<a href='tel:"+t.action+"' target='_blank'></a>")),o.append(c),e.append(o),i.append(e),i}export function GetSmallBoost(){"y"===Status.smallbooststatus&&SmallBoost.list.forEach(t=>{if("y"===t.active)if(""===t.boost_location_id||null===t.boost_location_id||"undefined"===t.boost_location_id)alert("🤖 Error Code: ESBTE-00");else{let a=$("#"+t.boost_location_id);if(a.length){let o=SmallBoostBuilder(t);a.append(o)}}})}function SmallBoostBuilder(t){let a,o=$("<div class='small-boost'></div>"),i=$("<div class='card'></div>"),e=$("<div class='card-header'>⭐️ Shining Star</div>"),s=$("<div class='card-title'>"+t.name+"</div>"),n=$("<button class='card-secondary-button'>"+t.action_text+"</button>");return i.append(e),i.append(s),"y"===t.action_is_link?a=$("<a href='"+t.action+"' target='_blank'></a>"):"y"===t.action_is_mail?a=$("<a href='mailto:"+t.action+"' target='_blank'></a>"):"y"===t.action_is_number&&(a=$("<a href='tel:"+t.action+"' target='_blank'></a>")),a.append(n),i.append(a),o.append(i),o}export function GetListBoost(){"y"===Status.listbooststatus&&ListBoost.list.forEach(t=>{if("y"===t.active)if(""===t.boost_location_id||null===t.boost_location_id||"undefined"===t.boost_location_id)alert("🤖 Error Code: ELBTE-00");else{let a=$("#"+t.boost_location_id);if(a.length){if($("#"+t.boost_location_id+" .list-boost").length){let a=$("#"+t.boost_location_id+" .list-boost .list-boost-items"),o=GetListBoostLink(t);a.append(o)}else{let o=$("<div class='list-boost'></div>"),i=$("<div class='list-boost-header'>📞 Also Check Out</div>"),e=$("<div class='list-boost-items'></div>");o.append(i),o.append(e);let s=GetListBoostLink(t);e.append(s),a.append(o)}}}})}function GetListBoostLink(t){return"y"===t.action_is_link?$("<a target='_blank' href='"+t.action+"' class='list-boost-item'> "+t.name+"</a>"):"y"===t.action_is_mail?$("<a target='_blank' href='mailto:"+t.action+"' class='list-boost-item'> "+t.name+"</a>"):"y"===t.action_is_number?$("<a target='_blank' href='tel:"+t.action+"' class='list-boost-item'> "+t.name+"</a>"):void 0}export function GetIntegratedBoost(t){"y"===Status.integratedbooststatus&&IntegratedBoost.list.forEach(a=>{if("y"===a.active){if(IntegratedListTable.list.find(o=>o.boost_id===a.id&&o.type_id===t.id)){let o=$("#"+a.boost_location_id);if(o.length)if("y"===a.action_is_link){let i=$("<a href='"+a.action+"' target='_blank'>"+t.name+"? Check Out <br/> <span class='integrated-result'>"+a.name+"</span> →</a>");o.append(i)}else if("y"===a.action_is_number){let i=$("<a href='tel:"+a.action+"' target='_blank'>"+t.name+"? Call <br/> <span class='integrated-result'>"+a.name+"</span> →</a>");o.append(i)}else if("y"===a.action_is_mail){let i=$("<a href='mailto:"+a.action+"' target='_blank'>"+t.name+"? Send An Email to <br/> <span class='integrated-result'>"+a.name+"</span> →</a>");o.append(i)}}}})}export function ClearBoost(){$(".boost").empty()}