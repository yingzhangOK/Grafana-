///<reference path="../../../headers/common.d.ts" />

function py2hz(location_name) {
  const MAP = {
    'qinhuangdao': '\u79e6\u7687\u5c9b',
    'beihai': '\u5317\u6d77',
    'dongying': '\u4e1c\u8425',
    'xianyang': '\u54b8\u9633',
    'shaoguan': '\u97f6\u5173',
    'laixi': '\u83b1\u897f',
    'jimo': '\u5373\u58a8',
    'fushun': '\u629a\u987a',
    'zhengzhou': '\u90d1\u5dde',
    'yixing': '\u5b9c\u5174',
    'jurong': '\u53e5\u5bb9',
    'kaifeng': '\u5f00\u5c01',
    'linyi': '\u4e34\u6c82',
    'shanghai': '\u4e0a\u6d77',
    'laizhou': '\u83b1\u5dde',
    'wuhu': '\u829c\u6e56',
    'jinan': '\u6d4e\u5357',
    'wafangdian': '\u74e6\u623f\u5e97',
    'deyang': '\u5fb7\u9633',
    'maoming': '\u8302\u540d',
    'zhanjiang': '\u6e5b\u6c5f',
    'jiujiang': '\u4e5d\u6c5f',
    'huaian': '\u6dee\u5b89',
    'zhangqiu': '\u7ae0\u4e18',
    'yueyang': '\u5cb3\u9633',
    'kuerlei': '\u5e93\u5c14\u52d2',
    'xiamen': '\u53a6\u95e8',
    'sanya': '\u4e09\u4e9a',
    'weihai': '\u5a01\u6d77',
    'zhangjiajie': '\u5f20\u5bb6\u754c',
    'nanning': '\u5357\u5b81',
    'jiaozuo': '\u7126\u4f5c',
    'yangzhou': '\u626c\u5dde',
    'foshan': '\u4f5b\u5c71',
    'pingdingshan': '\u5e73\u9876\u5c71',
    'guiyang': '\u8d35\u9633',
    'hangzhou': '\u676d\u5dde',
    'fuzhou': '\u798f\u5dde',
    'shaoxing': '\u7ecd\u5174',
    'yanan': '\u5ef6\u5b89',
    'heyuan': '\u6cb3\u6e90',
    'linfen': '\u4e34\u6c7e',
    'wuxi': '\u65e0\u9521',
    'jingzhou': '\u8346\u5dde',
    'zaozhuang': '\u67a3\u5e84',
    'qujing': '\u66f2\u9756',
    'baoding': '\u4fdd\u5b9a',
    'huhehaote': '\u547c\u548c\u6d69\u7279',
    'qiqihaer': '\u9f50\u9f50\u54c8\u5c14',
    'jinhua': '\u91d1\u534e',
    'zhangjiakou': '\u5f20\u5bb6\u53e3',
    'chaozhou': '\u6f6e\u5dde',
    'kunshan': '\u6606\u5c71',
    'shouguang': '\u5bff\u5149',
    'mudanjiang': '\u7261\u4e39\u6c5f',
    'jining': '\u6d4e\u5b81',
    'wulumuqi': '\u4e4c\u9c81\u6728\u9f50',
    'heze': '\u83cf\u6cfd',
    'pingdu': '\u5e73\u5ea6',
    'handan': '\u90af\u90f8',
    'changde': '\u5e38\u5fb7',
    'xingtai': '\u90a2\u53f0',
    'dongguan': '\u4e1c\u839e',
    'jiangmen': '\u6c5f\u95e8',
    'nantong': '\u5357\u901a',
    'jiaozhou': '\u80f6\u5dde',
    'guangzhou': '\u5e7f\u5dde',
    'xining': '\u897f\u5b81',
    'hefei': '\u5408\u80a5',
    'wuhan': '\u6b66\u6c49',
    'lishui': '\u4e3d\u6c34',
    'xuzhou': '\u5f90\u5dde',
    'jiayuguan': '\u5609\u5cea\u5173',
    'tongchuan': '\u94dc\u5ddd',
    'qingdao': '\u9752\u5c9b',
    'chongqing': '\u91cd\u5e86',
    'suqian': '\u5bbf\u8fc1',
    'rongcheng': '\u8363\u6210',
    'cangzhou': '\u6ca7\u5dde',
    'linan': '\u4e34\u5b89',
    'eerduosi': '\u9102\u5c14\u591a\u65af',
    'maanshan': '\u9a6c\u978d\u5c71',
    'zigong': '\u81ea\u8d21',
    'lasa': '\u62c9\u8428',
    'changzhou': '\u5e38\u5dde',
    'hengshui': '\u8861\u6c34',
    'luoyang': '\u6d1b\u9633',
    'rizhao': '\u65e5\u7167',
    'weifang': '\u6f4d\u574a',
    'chengdu': '\u6210\u90fd',
    'binzhou': '\u6ee8\u5dde',
    'xiangtan': '\u6e58\u6f6d',
    'meizhou': '\u6885\u5dde',
    'shenyang': '\u6c88\u9633',
    'zibo': '\u6dc4\u535a',
    'qingyuan': '\u6e05\u8fdc',
    'zhuzhou': '\u682a\u6d32',
    'jiaonan': '\u80f6\u5357',
    'langfang': '\u5eca\u574a',
    'taian': '\u6cf0\u5b89',
    'liyang': '\u6ea7\u9633',
    'zunyi': '\u9075\u4e49',
    'zhenjiang': '\u9547\u6c5f',
    'yibin': '\u5b9c\u5bbe',
    'datong': '\u5927\u540c',
    'dandong': '\u4e39\u4e1c',
    'kelamayi': '\u514b\u62c9\u739b\u4f9d',
    'huizhou': '\u60e0\u5dde',
    'guilin': '\u6842\u6797',
    'taicang': '\u592a\u4ed3',
    'lianyungang': '\u8fde\u4e91\u6e2f',
    'yunfu': '\u4e91\u6d6e',
    'zhangjiagang': '\u5f20\u5bb6\u6e2f',
    'shizuishan': '\u77f3\u5634\u5c71',
    'panjin': '\u76d8\u9526',
    'penglai': '\u84ec\u83b1',
    'zhongshan': '\u4e2d\u5c71',
    'lanzhou': '\u5170\u5dde',
    'jinchang': '\u91d1\u660c',
    'shantou': '\u6c55\u5934',
    'shanwei': '\u6c55\u5c3e',
    'yangquan': '\u9633\u6cc9',
    'yuxi': '\u7389\u6eaa',
    'fuyang': '\u5bcc\u9633',
    'zhuhai': '\u73e0\u6d77',
    'wujiang': '\u5434\u6c5f',
    'kunming': '\u6606\u660e',
    'jiangyin': '\u6c5f\u9634',
    'taizhou': '\u6cf0\u5dde',
    'dezhou': '\u5fb7\u5dde',
    'zhaoqing': '\u8087\u5e86',
    'laiwu': '\u83b1\u829c',
    'quzhou': '\u8862\u5dde',
    'haimen': '\u6d77\u95e8',
    'wenzhou': '\u6e29\u5dde',
    'zhoushan': '\u821f\u5c71',
    'changsha': '\u957f\u6c99',
    'luzhou': '\u6cf8\u5dde',
    'weinan': '\u6e2d\u5357',
    'liuzhou': '\u67f3\u5dde',
    'ningbo': '\u5b81\u6ce2',
    'yichang': '\u5b9c\u660c',
    'suzhou': '\u82cf\u5dde',
    'changshu': '\u5e38\u719f',
    'anyang': '\u5b89\u9633',
    'yinchuan': '\u94f6\u5ddd',
    'beijing': '\u5317\u4eac',
    'dalian': '\u5927\u8fde',
    'benxi': '\u672c\u6eaa',
    'xian': '\u897f\u5b89',
    'sanmenxia': '\u4e09\u95e8\u5ce1',
    'jieyang': '\u63ed\u9633',
    'nanjing': '\u5357\u4eac',
    'yingkou': '\u8425\u53e3',
    'nanchang': '\u5357\u660c',
    'yiwu': '\u4e49\u4e4c',
    'panzhihua': '\u6500\u679d\u82b1',
    'mianyang': '\u7ef5\u9633',
    'zhuji': '\u8bf8\u66a8',
    'chengde': '\u627f\u5fb7',
    'shenzhen': '\u6df1\u5733',
    'zhaoyuan': '\u62db\u8fdc',
    'huzhou': '\u6e56\u5dde',
    'yantai': '\u70df\u53f0',
    'wendeng': '\u6587\u767b',
    'yancheng': '\u76d0\u57ce',
    'haerbin': '\u54c8\u5c14\u6ee8',
    'quanzhou': '\u6cc9\u5dde',
    'changchun': '\u957f\u6625',
    'baotou': '\u5305\u5934',
    'jintan': '\u91d1\u575b',
    'huludao': '\u846b\u82a6\u5c9b',
    'yangjiang': '\u9633\u6c5f',
    'shijiazhuang': '\u77f3\u5bb6\u5e84',
    'chifeng': '\u8d64\u5cf0',
    'jinzhou': '\u9526\u5dde',
    'baoji': '\u5b9d\u9e21',
    'liaocheng': '\u804a\u57ce',
    'rushan': '\u4e73\u5c71',
    'haikou': '\u6d77\u53e3',
    'daqing': '\u5927\u5e86',
    'nanchong': '\u5357\u5145',
    'tianjin': '\u5929\u6d25',
    'jiaxing': '\u5609\u5174',
    'tangshan': '\u5510\u5c71',
    'zhangzhi': '\u957f\u6cbb',
    'taiyuan': '\u592a\u539f',
    'anshan': '\u978d\u5c71',
    'anhui': '\u5b89\u5fbd',
    'aomen': '\u6fb3\u95e8',
    'fujian': '\u798f\u5efa',
    'gansu': '\u7518\u8083',
    'guangdong': '\u5e7f\u4e1c',
    'guangxi': '\u5e7f\u897f',
    'guizhou': '\u8d35\u5dde',
    'hainan': '\u6d77\u5357',
    'hebei': '\u6cb3\u5317',
    'heilongjiang': '\u9ed1\u9f99\u6c5f',
    'henan': '\u6cb3\u5357',
    'hubei': '\u6e56\u5317',
    'hunan': '\u6e56\u5357',
    'jiangsu': '\u6c5f\u82cf',
    'jiangxi': '\u6c5f\u897f',
    'jilin': '\u5409\u6797',
    'liaoning': '\u8fbd\u5b81',
    'neimenggu': '\u5185\u8499\u53e4',
    'ningxia': '\u5b81\u590f',
    'qinghai': '\u9752\u6d77',
    'shandong': '\u5c71\u4e1c',
    'shanxi': '\u9655\u897f',
    'shaanxi': '\u5c71\u897f',
    'sichuan': '\u56db\u5ddd',
    'taiwan': '\u53f0\u6e7e',
    'xianggang': '\u9999\u6e2f',
    'xinjiang': '\u65b0\u7586',
    'xizang': '\u897f\u85cf',
    'yunnan': '\u4e91\u5357',
    'zhejiang': '\u6d59\u6c5f',
    'nei': '\u5185\u8499\u53e4',
    'mongol': '\u5185\u8499\u53e4'
  };

  if (MAP.hasOwnProperty(location_name)){
    return MAP[location_name];
  }else{
    return location_name;
  }
}

export{py2hz}
