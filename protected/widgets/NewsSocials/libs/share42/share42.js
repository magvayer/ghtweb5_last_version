/* share42.com | 10.11.2013 | (c) Dimox */
(function($){$(function(){$('div.share42init').each(function(idx){var el=$(this),u=el.attr('data-url'),t=el.attr('data-title'),i=el.attr('data-image'),d=el.attr('data-description'),f=el.attr('data-path'),z=el.attr("data-zero-counter");if(!u)u=location.href;if(!z)z=0;function fb_count(url){var shares;$.getJSON('http://graph.facebook.com/?callback=?&ids='+url,function(data){shares=data[url].shares||0;if(shares>0||z==1)el.find('a[data-count="fb"]').after('<span class="share42-counter">'+shares+'</span>')})}fb_count(u);function lnkd_count(url){var shares;$.getJSON('http://www.linkedin.com/countserv/count/share?callback=?&url='+url,function(data){shares=data.count;if(shares>0||z==1)el.find('a[data-count="lnkd"]').after('<span class="share42-counter">'+shares+'</span>')})}lnkd_count(u);function mail_count(url){var shares;$.getJSON('http://connect.mail.ru/share_count?callback=1&func=?&url_list='+url,function(data){shares=data.hasOwnProperty(url)?data[url].shares:0;if(shares>0||z==1)el.find('a[data-count="mail"]').after('<span class="share42-counter">'+shares+'</span>')})}mail_count(u);function odkl_count(url){var shares;$.getScript('http://www.odnoklassniki.ru/dk?st.cmd=extLike&uid='+idx+'&ref='+url);if(!window.ODKL)window.ODKL={};window.ODKL.updateCount=function(idx,number){shares=number;if(shares>0||z==1)$('div.share42init').eq(idx).find('a[data-count="odkl"]').after('<span class="share42-counter">'+shares+'</span>')}}odkl_count(u);function vk_count(url){var shares;$.getScript('http://vk.com/share.php?act=count&index='+idx+'&url='+url);if(!window.VK)window.VK={};window.VK.Share={count:function(idx,number){shares=number;if(shares>0||z==1)$('div.share42init').eq(idx).find('a[data-count="vk"]').after('<span class="share42-counter">'+shares+'</span>')}}}vk_count(u);if(!f){function path(name){var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');for(var i=0,scL=sc.length;i<scL;i++){var m=String(sc[i].src).match(sr);if(m){if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];if(m[1].indexOf("/")==0)return m[1];b=document.getElementsByTagName('base');if(b[0]&&b[0].href)return b[0].href+m[1];else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];}}return null;}f=path('share42.js');}if(!t)t=document.title;if(!d){var meta=$('meta[name="description"]').attr('content');if(meta!==undefined)d=meta;else d='';}u=encodeURIComponent(u);t=encodeURIComponent(t);t=t.replace(/\'/g,'%27');i=encodeURIComponent(i);d=encodeURIComponent(d);d=d.replace(/\'/g,'%27');var fbQuery='u='+u;if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;var vkImage='';if(i!='null'&&i!='')vkImage='&image='+i;var s=new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?'+fbQuery+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"','"#" onclick="window.open(\'https://plus.google.com/share?url='+u+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Google+"','"#" data-count="lnkd" onclick="window.open(\'http://www.linkedin.com/shareArticle?mini=true&url='+u+'&title='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=400, toolbar=0, status=0\');return false" title="Добавить в Linkedin"','"http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl='+u+'&cntitle='+t+'" title="Опубликовать в LiveInternet"','"http://www.livejournal.com/update.bml?event='+u+'&subject='+t+'" title="Опубликовать в LiveJournal"','"#" data-count="mail" onclick="window.open(\'http://connect.mail.ru/share?url='+u+'&title='+t+'&description='+d+'&imageurl='+i+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Моем Мире@Mail.Ru"','"http://www.myspace.com/Modules/PostTo/Pages/?u='+u+'&t='+t+'&c='+d+'" title="Добавить в MySpace"','"#" data-count="odkl" onclick="window.open(\'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl='+u+'&title='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Добавить в Одноклассники"','"#" data-count="vk" onclick="window.open(\'http://vk.com/share.php?url='+u+'&title='+t+vkImage+'&description='+d+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться В Контакте"');var l='';for(j=0;j<s.length;j++)l+='<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:16px;"><a rel="nofollow" style="display:inline-block;width:16px;height:16px;margin:0;padding:0;outline:none;background:url('+f+'icons.png) -'+16*j+'px 0 no-repeat" href='+s[j]+' target="_blank"></a></span>';el.html('<span id="share42">'+l+'</span>'+'<style>.share42-counter{display:inline-block;vertical-align:top;margin-left:9px;position:relative;background:#FFF;color:#666;} .share42-counter:before{content:"";position:absolute;top:0;left:-8px;width:8px;height:100%;} .share42-counter{margin-left:8px;padding:0 4px 0 0;font:11px/16px Arial,sans-serif;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAQCAYAAACBSfjBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFxJREFUeNrs2LENwDAIBVGTmpG8pxeyOxZgD3oHjxBSWbqTvuhfiZjZblRp5obsDIvvRURz9/lAUUtVz+kA/gxAAAEEEEACEEAAASQAAbym80zIlvDOKrdy4xVgAAM5F8Own8BjAAAAAElFTkSuQmCC) 100% 0;} .share42-counter:before{left:-7px;width:7px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIZJREFUeNpi/P//PwMMnD17NgpIZQKxDVwQpACGz5w5c/jz58//kQETAyqw4eHhQRFAV4ABiFcAdOB/KSkpTBVQx/1/9uzZf2wAryQ2X2B1AyPQBIbnz5/jdiTQcTgVMRkbGzOAJGGKsPoCKajJcyQyOPLlyxcUARY0BdNv3rzJgBzdAAEGAK5HmCb2mg2GAAAAAElFTkSuQmCC);}</style>');})})})(jQuery);