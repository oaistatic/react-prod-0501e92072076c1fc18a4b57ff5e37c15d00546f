import{n as e}from"./f025431a-gjb4o5hex8ccu4v5.js";import{a as t,o as n,s as r}from"./25a66342-lp91zfjcxfxc8v8y.js";import{B as i,C as a,V as o,W as s,_ as c,a as l,c as u,d,k as f,v as p,y as m}from"./682a6e35-mxvcp5l6dy9pejif.js";import{n as h,t as g}from"./2be34586-gjo1c6abs3ygphgw.js";import{r as _,u as v}from"./e43f5ae9-c8oswti637bmk0zm.js";import{n as y,t as b}from"./21d2934c-ob1wi7xf10ovbuba.js";import{n as x,t as S}from"./07065dac-6aikmao7l7yyoeze.js";var C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{g(),b(),v(),f(),n(),S(),w=d.packet,T=(C=class{constructor(){this.packet=[],this.setAccTitle=o,this.getAccTitle=p,this.setDiagramTitle=s,this.getDiagramTitle=a,this.getAccDescription=c,this.setAccDescription=i}getConfig(){let e=_({...w,...m().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){l(),this.packet=[]}},t(C,`PacketDB`),C),E=1e4,D=t((e,t)=>{y(e,t);let n=-1,i=[],a=1,{bitsPerRow:o}=t.getConfig();for(let{start:s,end:c,bits:l,label:u}of e.blocks){if(s!==void 0&&c!==void 0&&c<s)throw Error(`Packet block ${s} - ${c} is invalid. End must be greater than start.`);if(s??=n+1,s!==n+1)throw Error(`Packet block ${s} - ${c??s} is not contiguous. It should start from ${n+1}.`);if(l===0)throw Error(`Packet block ${s} is invalid. Cannot have a zero bit field.`);for(c??=s+(l??1)-1,l??=c-s+1,n=c,r.debug(`Packet block ${s} - ${n} with label ${u}`);i.length<=o+1&&t.getPacket().length<E;){let[e,n]=O({start:s,end:c,bits:l,label:u},a,o);if(i.push(e),e.end+1===a*o&&(t.pushWord(i),i=[],a++),!n)break;({start:s,end:c,bits:l,label:u}=n)}}t.pushWord(i)},`populate`),O=t((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),k={parser:{yy:void 0},parse:t(async e=>{let t=await x(`packet`,e),n=k.parser?.yy;if(!(n instanceof T))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);r.debug(t),D(t,n)},`parse`)},A=t((e,t,n,r)=>{let i=r.db,a=i.getConfig(),{rowHeight:o,paddingY:s,bitWidth:c,bitsPerRow:l}=a,d=i.getPacket(),f=i.getDiagramTitle(),p=o+s,m=p*(d.length+1)-(f?0:o),g=c*l+2,_=h(t);_.attr(`viewbox`,`0 0 ${g} ${m}`),u(_,m,g,a.useMaxWidth);for(let[e,t]of d.entries())j(_,t,e,a);_.append(`text`).text(f).attr(`x`,g/2).attr(`y`,m-p/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),j=t((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),M={draw:A},N={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},P={parser:k,get db(){return new T},renderer:M,styles:t(({packet:e}={})=>{let t=_(N,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)}}))();export{P as diagram};
//# sourceMappingURL=62963bd5-ia4zk9mskthnun4a.js.map