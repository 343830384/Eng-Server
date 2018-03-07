var filter=require('./filter').filter;
var qe=require('./qe.js').o;
var isJsonOrArray=function(x){
		var t=typeof(x),k;
		 if(t=='string')return 1;
		 if(t=='boolean')return 2;
		 if(t=='number')return 3;
	  if(x instanceof Array)return 4; 
	  if(t=='object')
	   for(k in x){return 5};        
	   return false;	                
};	
var arrInsert=function(arr1,arr2,n,m){
	   var i,L,v,arr,ar;
	      v=arr1.length+m;
	      arr=arr1.slice(n+1);
	      i=0,L=arr2.length;
	      while(i<L){
	      	arr1[n+i]=arr2[i];
	      	i++;
	      };
	      i=n+m+1,L=0;
	      while(i<v){
	      	 arr1[i]=arr[L];
	      	 i++;L++;
	      };
};
var Jparse4=function(k,v){
	  var arr=[],arr2=[['"','"'],["'","'"],["'",'"'],['"',"'"]],i=4;
	      while(i--){
	      	arr[i]=k+arr2[i][0]+v+arr2[i][1];
	      };
	     return arr;
};
var sortArr=function(s,m,arr,o){ 
var i,l=arr.length,a=['$_NV','$_AT'],b,c,d,e,f,v,arr2=[];
       while(l--){
       	  b=2,c=arr[l];
       	  while(b--){
       	  	  d=o[c][a[b]];
       	  	  e=d.length;
       	  	   while(e--){
       	  	   	  f=d[e];
       	  	   	  if(f>s){
       	  	   	    	if(b==1){
       	  	   	    		 v=o.$_ach[f];
       	  	   	    		 arr2.push([f,f+m,v]);
       	  	   	    	};
       	  	   	  	 d[e]=f+m;
       	  	   	  };
       	  	   };
       	  };
       };
      l=arr2.length;
      i=l;
      while(l--){
      	   delete o.$_ach[arr2[0]];
      };
      while(i--){
      	   o.$_ach[arr2[1]]=arr2[2];
      };
};
var Jparse3=function(txt,atr,o,k){ 
	  var d1,d2,d3,a1=0,a2,a3,i,b,d,e,v1,v2,v3,v4,vv,arr,arr2,k1,g,cArr,o1,o2,c1,c2,tv,v5;
	     d1=txt.length;
	     d3=d1;
	     a1=0;
	     k=='e-attr='?g='$_AT':null;
	     k=='e-html='?g='$_HT':null;
	     d2=atr.length;
      s1=0;
      a2=0
	    while(a2<d2){
	    	  c2=txt.length;
	    	  a1=0;
        v2=Jparse4(k,atr[a2]);
	    	  while(a1<c2){
											    	  	  i=0;
														    	  	  while(i<4){
														    	  	  	  v1=txt[a1].indexOf(v2[i]);
														    	  	  	  if(v1>-1){
				                           flag=1;
																	    	  	  	  	if(g=='$_AT'){
																	    	  	  	  		 v3=forMatAttr(atr[a2]);
																	    	  	  	  		 v5=v3;
																	    	  	  	  		 v4=txt[a1].replace(v2[i],v3[1]);
																	    	  	  	  	};
																	    	  	  	  	if(g=='$_HT'){
																	    	  	  	  		 v3='>{{'+atr[a2]+'}}<';
																	    	  	  	  		 v4=txt[a1].replace(v2[i],'');
																	    	  	  	  		 v4=v4.replace('><',v3);
																	    	  	  	  		 g='$_NV';
																    	  	  	  	};
																                v4=v4.split(regALL[1]);
																                v3=v4.length; 
																                b=0;arr=[],arr2=[];
																                while(b<v3){
																                	   vv=v4[b];
																                	   if(regALL[1].test(vv)){
																                	   	   vv=vv.replace(regALL[2],'');
																                	   	   v4[b]='';
																                	   	   arr.push(b); 
																                	   	   arr2.push(vv);  
																                	   };
																                	  b++;
																                };
																		                d=arr.length,b=0;
																		                cArr=[];
																		                while(b<d){
																		                	  k1=arr2[b];
																		                	  if(!o[k1]){
																		                	  	 o[k1]={};
																		                	  	 o[k1]['$_NV']=[];
																		                	  	 o[k1]['$_AT']=[];
																		                	  };
																		                	  cArr.push([k1,o[k1][g],arr[b]+a1]);
																		                	 b++;
																		               };
																			                sortArr(a1,v3-1,o.$_VVV,o);
																			                 o1=cArr.length;
																			                 while(o1--){
																			                 	 o2=cArr[o1];
																			                 	 if(o.$_VVV.indexOf(o2[0])<0){
																						     	   	 	  	  	 o.$_VVV.push(o2[0]);
																						     	   	 	  	 };
																						     	   	 	  	 if(g=='$_AT'){
																						     	   	 	  	 	o.$_ach[o2[2]]=[v5[0][o1],a2];
																						     	   	 	  	 };
																						     	   	 	  	 o2[1].push(o2[2]);
																			                 };
										                           arrInsert(txt,v4,a1,v3-1);
																			                break;
														    	  	  	  }
														    	  	  	  i++;
														    	  	  };
	           a1++;
	        };
	         a2++;
	    };
};
var Jparse2=function(o){
	    var k,v,n,a,b,c,d;
       if(!o.$_VVV)o['$_VVV']=[],o['$_ach']={}; 
  	   	 a=o.$_txt.split(regALL[1]);
  	   	 b=a.length;
  	   	 c=0;
  	   	 while(c<b){
  	   	 	   d=a[c];
  	   	 	  if(regALL[1].test(d)){
  	   	 	  	  a[c]='';
  	   	 	  	  d=d.replace(regALL[2],'');
  	   	 	  	  if(!o[d])o[d]={};
  	   	 	  	  if(!o[d]['$_NV'])o[d]['$_NV']=[],o[d]['$_AT']=[];
  	   	 	  	  o[d]['$_NV'].push(c);
  	   	 	  	  if(o.$_VVV.indexOf(d)<0){
  	   	 	  	  	 o.$_VVV.push(d);
  	   	 	  	  }
  	   	 	  };
  	   	 	 c++;
  	   	 };
  	   	 o.$_txt=a;
	     for(k in o){
	     	   v=o[k];
	     	   n=isJsonOrArray(v);
	     	   if(k=='$_attr'){
	     	   	  Jparse3(a,v,o,'e-attr=')
	     	   };
	     	   if(k=='$_html'){
	     	   	  Jparse3(a,v,o,'e-html=')
	     	   };
	     	   if(n==5&&v.$_txt){
	     	  	  Jparse2(v);
	     	   };
	     };
};
var signA='<!--$#';
var signB='#$-->';
var Jparse=function( o){
	  var k,v,n,s,a,b,c,d,i;
	      for(k in o){
	      	    v=o[k];
	      	    n=isJsonOrArray(v);
	      	  if(!o.$_txt&&n==5){
	      	  	  Jparse(v);
	      	  	  continue;
	      	  };
	      	    if(n==5){
	      	    	  if(v.$_txt){
	      	    	  	   o.$_txt=o.$_txt.replace(v.$_txt,signA+k+signB);
	      	    	  	   if(o.$_wid){ 
	      	    	  	   	  o.$_wid.push(k);
	      	    	  	   }else{
	      	    	  	   	  o['$_wid']=[];
	      	    	  	   	  o.$_wid.push(k);
	      	    	  	   };
	      	    	    };
	      	    	  Jparse(v);
	      	    };
	      	   if(o.$_base){
	      	    	  	   	  b=o.$_base.length;
	      	    	  	   	  a=0;
	      	    	  	   	  while(a<b){
	      	    	  	   	  	    c=Jparse4(" e-base=",o.$_base[a]);
	    	  	                  i=0;
	    	  	                   while(i<4){
																	    	  	  	  d=o.$_txt.indexOf(c[i]);
																	    	  	  	  if(d>-1){
																                o.$_txt=o.$_txt.replace(c[i],'');
																	    	  	  	  };
																	    	  	  	  i++;
																	    	  	  };
	    	  	                a++;  
	      	    	  	   	  }
	      	    	  };
	      	    	if(o.$_for){
	      	    	  	   	  b=o.$_for.length;
	      	    	  	   	  a=0;
	      	    	  	   	  while(a<b){
	      	    	  	   	  	    c=Jparse4(" e-for=",o.$_for[a]);
	    	  	                  i=0;
	    	  	                   while(i<4){
																	    	  	  	  d=o.$_txt.indexOf(c[i]);
																	    	  	  	  if(d>-1){
																                o.$_txt=o.$_txt.replace(c[i],'');
																	    	  	  	  };
																	    	  	  	  i++;
																	    	  	  };
	    	  	                a++;  
	      	    	  	   	  }
	      	    	};
	      };
};

var regALL=[
           /(\{\{[^{}]+\}\})/,
           /(\{\{[^{}]+\}\})/g,
           /({{|}})/g,
           /^(e\-)/,
           /(\>\=|\<\=|\>|\<|\=\=\=|\=\=|\=)/,
          ];
var reg77=function(s){
	    var a=[],L=s.length,i=0,c,t='',f=1,k,g,o,b;
         while(i<L){
         	   c=s[i];
         	   if(f&&c=='='){a.push(t),a.push(c),t='',f=0,k=1,i++;continue;};
         	   if(k&&c=='?'){ t=t.split(regALL[4]), o=t.length,b=0;while(b<o){a.push(t[b]),b++};t='',k=0,a.push(c),g=1,i++,o=i; continue};
         	   if(g&&c==')'&&s[i+1]==':'){a.push(s.slice(o+1,i)),a.push(':'),a.push(s.slice(i+3,-1));break};t+=c,i++;
         	   if(i==L){a.push(t)};
         };
	      return a;
};
var typePanDuanJson={
	       '=':0,'==':0,'===':0,'>=':1,'<=':2,'>':3,'<':4,
};
var typePanDuan=function(s){
	   var v=typePanDuanJson[s];
	       return v;
};

var forMatStr=function(str){
	    var arr=reg77(str),L=arr.length,i=0,arr2=[];
	       if(L>2){
	       	 	  L=arr.length;
	       	 	  arr2.push(arr[2].replace(regALL[2],'').trim());
	       	 	  if(L==9)arr2.push(typePanDuan(arr[3]));
	       	 	  while(i<L){
	       	 	  	  i%2||i==2?null:arr2.push(arr[i].trim());
	       	 	    	i++;
	       	 	  };
	       	 	  
	       	 	  return arr2;
	       };
	       	 return;  
};
var forMatAttr=function(atr){
	   var arr,L,data=[],v;
	       arr=atr.split(';');
	       L=arr.length;
		       	while(L--){
		       		v=forMatStr(arr[L]);
		       		if(v)data.push(v);
		       	};
		    if(data.length){
		    	 data=attrBuild(data);
		    	 return data;
		    };
		    return;
};

var attrBuild=function(d){
	   var i=0,L=d.length,j={},str='';
	     while(i<L){
	     	  str+="{{"+d[i][0]+(i==L-1?"}}":"}} ")
	     	  i++;
	     };
	     return [d,str];
};
//~
var mergeData=function(v,arr2,cs,n){
   	    var atr=arr2[1],k,c,c1,L=arr2.length,flag,y;
   	        switch(L){
   	        	case 2:
   	        	 flag=1,c=v;
   	        	break;
   	        	case 4:
   	        	 v?flag=1:null;
   	        	 c=arr2[2],c1=arr2[3];
   	        	break;
   	        	case 6:
   	        	  atr=arr2[2];
   	        	  k=arr2[1];
   	        	  k==0?(v==arr2[3]?flag=1:null):null;
   	        	  k==1?(v>=arr2[3]?flag=1:null):null;
   	        	  k==2?(v<=arr2[3]?flag=1:null):null;
   	        	  k==3?(v>arr2[3]?flag=1:null):null;
   	        	  k==4?(v<arr2[3]?flag=1:null):null;
   	        	  c=arr2[4],c1=arr2[5];
   	        	break;
   	        	default:return;
   	        };
   	         atr?atr=atr.toLowerCase():null;
   	         if(atr=='class')y=' ',cs=cs[0][n];
   	         if(atr=='style')y=';',cs=cs[1][n];
   	       if(L>2&&y){	
   	       	  v=cs;
              v?(v=v.replace(y+c1,'').replace(y+c,'').trim()):null;
   	       	  v?(v=v+y+(flag?c:c1)):(v=y+(flag?c:c1));
                return atr+'=\''+v+'\'';
   	       }else{
                return atr+'=\''+(flag?c:c1)+'\'';
   	       };
};	
var nah=[2,1];
var hy=function(o,j,f){
	    var k ,v ,n,ach,txt,i,v2,v3,l,wid=[],wAche=[],arChe,s='<!--$#',e='#$-->',cs;
	       
	        txt=j.$_a; ach=j.$_b,cs=j.$_c;
	      if(f&&!txt){
	      	   for(k in o){
	      	   	 v=o[k];
	      	   	 n=isJsonOrArray(v);
	      	   	 if(n==5){
	      	   	 	 return hy(v,j[k]);
	      	   	 };
	      	   }
	      }else{
						       for(k in o){
						       	    v=o[k];
						       	    	  n=isJsonOrArray(v);
									       	    if(n==5){  
									       	    	 wid.push(s+k+e);
									       	    	 wAche.push( hy(v,j[k]));
									       	    }else if(n==4){
									       	    	 wid.push(s+k+e);
					                   l=v.length,i=0,arChe=[];
					                   while(i<l){
					                   	 arChe.push(hy(v[i],j[k]) );
					                   	 i++
					                   };
									       	    	 wAche.push(arChe.join(''));
									       	    }else{ 
									       	    	   i=2;
									       	    	   v3=j[k];
									       	    	   while(i--){
											       	    	   	  v2=v3[nah[i]];
											       	    	   	  if(!v2)continue;
											       	    	   	  l=v2.length;
													       	    	   	   while(l--){
													       	    	   	   	 n=v2[l];
													       	    	   	   	 if(i){
													       	    	   	   	   txt[n]=v;
													       	    	   	   	 }else{
													       	    	   	   	    k=ach[n];
													       	    	   	   	   txt[n]=mergeData(v,k[0],cs,k[1])
													       	    	   	   	 };
													       	    	   	   };
									       	    	   };	  
									       	   };
						       };
	      }; 
	       txt=txt.join('');
	       i=wid.length;
	       while(i--){
	       	 txt=txt.replace(wid[i],wAche[i]);
	       };
	       return txt;
};
//###########################################################
var delTxy=function(o){
	  var k ,v,n;
	   for(k in o){
	   	    v=o[k];
	   	    n=isJsonOrArray(v);
	   	    if(!o.$_txt&&n==5){
	   	    	 delTxy(v);
	   	    	 continue;
	   	    };
	     	  delete o.$_txy;
	     	 if(n==5&&v.$_txt){
	     	 	  o.$_txt=o.$_txt.replace(v.$_txy,v.$_txt);
	     	 	  delTxy(v);
	     	 };
	   };
};

var Jparse2Pre=function(o){
	   var k,v,n;
	   if(o.$_txt){
	   	  Jparse2(o);
	   }else{
		   for(k in o){
		   	   v=o[k];
	   	    n=isJsonOrArray(v);
	   	    if(!o.$_txt&&n==5){
	   	    	 Jparse2(v);
	   	    };
		   };
	   };
};
var clearList={
	        $_base:1,
	        $_attr:1,
	        $_VVV:1,
	        $_for:1,
	        $_type:1,
	        $_wid:1,
	        $_html:1
};
var clearDY=function(o){
	   var k ,v,n;
	     for(k in o){
	     	    v=o[k];
	     	    n=isJsonOrArray(v);
	     	    if(clearList[k]){
	     	    	delete o[k];
	     	    };
	     	    if(n==5&&v.$_txt){
	     	    	 clearDY(v);
	     	    };
	     }
};

var format=function(hJson,sign){
		   delTxy(hJson);
		   Jparse(hJson);
	    Jparse2Pre(hJson);
     clearDY(hJson);
     filter(hJson);
     qe[sign](JSON.stringify(hJson));
};

exports.format=format;
exports.dataGlue=hy;