var app = ons.bootstrap();

app.controller('indexController', function($scope) {
    $scope.toolbarTitle = '行程';

    $scope.dayInfo1 = [{
            imageNames: ['day1_a.JPG'],
            title: '旅店',
            name: '旅店楼下',
            body: '吃早饭，等待出发'
        },
        {
            imageNames: ['day1_b.JPG', 'day1_c.JPG'],
            title: '旅游大巴',
            name: '车外风景',
            body: '坐车前往景点'
        },
        {
            imageNames: ['day1_d.JPG', 'day1_e.JPG'],
            title: '景点',
            name: '和大象的合照',
            body: '导游介绍树胶，骑乘大象，观看小象猴子表演'
        },
        {
            imageNames: ['day1_f.JPG', 'day1_g.JPG', 'day1_h.JPG', 'day1_i.JPG', 'day1_j.JPG', 'day1_k.JPG', 'day1_l.JPG'],
            title: '坐船',
            name: '水上风光',
            body: '围绕岛屿转一圈'
        },
        {
            imageNames: ['day1_m.JPG', 'day1_n.JPG'],
            title: '坐船',
            name: '水上风光',
            body: '中饭过后，继续水上航行,图为大白菜'
        },
        {
            imageNames: ['day1_o.JPG', 'day1_p.JPG', 'day1_q.JPG'],
            title: '长岛',
            name: '旅店岛屿风光',
            body: '晚上休息的岛屿，宿舍和餐厅'
        }
    ];

    $scope.dayInfo2 = [{
        imageNames: ['day2_a.JPG', 'day2_b.JPG', 'day2_c.JPG', 'day2_d.JPG'],
        title: '不知名岛屿',
        name: '岛屿风光',
        body: '第二天出海去某个岛屿上'
    }];

    $scope.dayInfo3 = [{
            imageNames: ['day3_a.JPG'],
            title: '清晨的长岛',
            name: '远望大海',
            body: '第三天的清晨，等带出海'
        },
        {
            imageNames: ['day3_b.JPG'],
            title: '人妖秀',
            name: '拍卖字画',
            body: '之后的表演秀不让拍照了'
        },
        {
            imageNames: ['day3_c.JPG', 'day3_d.JPG'],
            title: '在某个不知名岛屿玩项目',
            name: '深浅',
            body: '1000泰珠'
        }
    ];

    $scope.dayInfo4 = [{
            imageNames: ['day4_a.JPG', 'day4_b.JPG'],
            title: '不知名的公园',
            name: '公园风景',
            body: '第四天的第一站'
        },
        {
            imageNames: ['day4_c.JPG'],
            title: '寺庙',
            name: '寺庙外面鱼塘',
            body: '参拜四面佛，听大师念经'
        }
    ];

    $scope.dayInfo5 = [{
            imageNames: ['day5_a.JPG', 'day5_b.JPG', 'day5_c.JPG'],
            title: '住宿',
            name: '住宿外景观及游泳池',
            body: '第五天下午要回武汉'
        },
        {
            imageNames: ['day5_d.JPG', 'day5_e.JPG'],
            title: '711',
            name: '711内购物',
            body: '买特产，扫荡便利店'
        },
        {
            imageNames: ['day5_f.PNG', 'day5_g.PNG', 'day5_h.JPG', 'day5_i.PNG'],
            title: '飞机场',
            name: '吃泡面',
            body: '当地下午四点中，6点飞机'
        }
    ];

    $scope.breakfasts = [{
        imageNames: ['breakfast1_a.JPG', 'breakfast1_b.JPG', 'breakfast1_c.JPG']
    }, {
        imageNames: ['breakfast2_a.JPG', 'breakfast2_b.JPG']
    }, {
        imageNames: ['breakfast3_a.JPG']
    }, {
        imageNames: ['breakfast4_a.JPG']
    }];

    $scope.lunches = [{
        imageNames: ['lunch1_a.JPG', 'lunch1_b.JPG']
    }, {
        imageNames: ['lunch2_a.JPG']
    }, {
        imageNames: ['lunch3_a.JPG']
    }];

    $scope.diners = [{
        imageNames: ['diner1_a.JPG']
    }, {
        imageNames: ['diner2_a.JPG', 'diner2_b.JPG']
    }, {
        imageNames: ['diner3_a.JPG', 'diner3_b.JPG']
    }];

    $scope.others = [{
        imageNames: ["other1_a.JPG", "other1_b.JPG"],
    }, {
        imageNames: ["other2_a.JPG", "other2_b.JPG", "other2_c.JPG", "other2_d.JPG"]
    }];

    $scope.showDetail = function(dayInfo) {
        $scope.selectedDayInfo = dayInfo;
        $scope.myNavigator.pushPage('html/place_detail.html');
    };

    $scope.showImageDialog = function(imageNames) {
        $scope.imageNames = imageNames;

        if (this.imageDialog) {
            this.imageDialog.show();
        } else {
            ons.createDialog('html/image_dialog.html', { parentScope: $scope })
                .then(function(imageDialog) {
                    this.imageDialog = imageDialog;
                    imageDialog.show();
                }.bind(this));
        }
    };
});