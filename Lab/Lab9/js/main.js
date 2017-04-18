var vue = new Vue({
	el:'#lucky-draw',
	data:{
		players: [],
		rewards: [],
		buffer: [] ,
		history: [],
		rewards_history:[],
		Img : [],
		currentPlayer :0 ,
		form:{
			Name: ''
		},
		isGameStart : false ,
		isGameFinished: false ,
		showRewardName: '',
		showRewardImg:'',
		isImgOpened: false ,
		isFirstTime: true 
	},

	methods : {
		addPlayer:function(){
			if(this.checkForm()){
				this.players.push({
					Name: this.form.Name,
					isRewarded : false ,
					rewardId : -1 ,
				});
				this.clearForm();
			}
		},
		checkForm:function(){
			if (this.form.Name.length >0){
				return true;
			}
			return false ;
		},
		clearForm:function(){
			this.form.Name = '' ;
		},
		startBtn:function(){
			this.isGameStart = true ;
			if(this.isFirstTime){
				this.rewards_history.push({rewardId:0,
				"name" : "None",
				"img_url" : "img/rewards/None.png"});
				this.isFirstTime = false;
				for (var i = 0; i < this.rewards.length; i++) {
					this.rewards_history.push(this.rewards[i]);
				}
			}
			this.addEmptyReward(this.buffer);
			for (var i = 0; i < this.rewards.length; i++) {
				this.buffer.push(this.rewards[i]);
			}
			for (var i = 0; i < this.players.length; i++) {
				console.log(this.buffer);
				var rand = Math.floor(Math.random()*this.buffer.length);
				var img = $('<img id="reward-'+this.buffer[rand].rewardId+'">');
				this.buffer.splice(rand,1);
				img.attr('src','img/close.png');
				img.attr('onmouseover', 'this.src="img/close-hover.png"');
		       	img.attr('onmouseout', 'this.src="img/close.png"');
		       	img.attr('width', '320');
		       	img.attr('height', '180');
		       	// img.attr('data-toggle','model');
		       	// img.attr('data-target','#mymodal2');
		       	// data-toggle="modal" data-target="#myModal" v-if="!isGameStart"
		       	img.attr('onclick', 'OnClick(this)');
		       	img.appendTo('#reward-drawers');
				console.log(img);
				this.Img.push(img);

				// var element = $('#reward-drawers').append(img);
				// this.$compile(element.get(0));
				// console.log(img);

				}
		},
		addEmptyReward:function(reward){
			if(this.players.length > 5 ){
				console.log(this.players);
				for (var i = 0; i < this.players.length-5; i++) {
					console.log('ss');
					reward.push({
						"rewardId":i+this.players.length,
						"name" : "None",
						"img_url" : "img/rewards/None.png"
					});
				}
			}
		},
		getReward:function(img) {
			this.removeAtt(img);
			var rewardId = img.id.substring(7);
			// console.log(img);
			this.showRewardImg = this.getRewardImg(rewardId);
			this.showRewardName = this.getRewardName(rewardId);
			$('#reward-'+rewardId).attr('src',this.showRewardImg);
			this.players[this.currentPlayer].isRewarded = true ;
			this.players[this.currentPlayer].rewardId = rewardId;
			this.isImgOpened = true ;
			this.history.push(this.players[this.currentPlayer]);
			setTimeout(function(){
    				alert(vue.showRewardName);
				}, 100);
			if(this.currentPlayer < this.players.length-1){
				this.currentPlayer++;
			}else{
				setTimeout(function(){
    				vue.end();
				}, 2000);
				
			}

			// body...
		},
		removeAtt:function(img){
			img.removeAttribute("onmouseover");
			img.removeAttribute("onmouseout");
			img.removeAttribute("onclick");
		},

		getPlayerName:function(index){
			return this.players[index].Name;
		},

		getRewardImg:function(rewardId){
			if(rewardId>5){
				return this.rewards_history[0].img_url;
			}
			for (var i = 1; i < this.rewards_history.length; i++) {

				if(this.rewards_history[i].rewardId == rewardId){
					// console.log(this.rewards_history[i].img_url);
					return this.rewards_history[i].img_url;
				}
			}
		},
		getRewardName(rewardId){
			// for (var i = 0; i < this.rewards_history.length; i++) {
			// 	console.log(this.rewards_history[i].name);
			// }
			if(rewardId>5){
				return "Unlucky Try Again Next Time!!";
			}
			for (var i = 1 ;i < this.rewards_history.length; i++) {
				if(this.rewards_history[i].rewardId == rewardId){
					return "You Get "+this.rewards_history[i].name+" !!";
				}
			}
		},
		getPureRewardName(rewardId){
			for (var i = 0; i < this.rewards_history.length; i++) {
				if(this.rewards_history[i].rewardId == rewardId){
					return this.rewards_history[i].name;
				}
			}
			return '-' ;
		},
		end:function() {
			this.isGameFinished = true ;
		},
		replay:function(){
			//Clear all element except history
			this.players = [] ;
			this.Img = [] ;
			this.buffer = [] ;
			this.currentPlayer = 0 ;
			this.isGameStart =  false ;
			this.isGameFinished =  false ;
			this.showRewardName =  '';
			this.showRewardImg = '' ;
			this.isImgOpened = false ;
		}


	},


	computed :{

		getCurrentPlayer: function(){
			return this.getPlayerName(this.currentPlayer);
		},

		isGameReady: function(){
			if (this.players.length >= 5){
				return true;
			}
			return false ;
		}

	},

	mounted: function () {
		 $.ajax({
            url: 'reward.config.json',
            method: 'GET',
            context: this,
            success: function (data) {
                this.rewards = data;
				// this.rewards_history = data;
            },
            error: function (error) {
                alert(JSON.stringify(error));
            }
        });

				// this.players.push({
				// 	Name : "act",
				// 	isRewarded : false,
				// 	rewardId : -1
				// }),
				// this.players.push({
				// 	Name : "za",
				// 	isRewarded : false,
				// 	rewardId : -1
				// }),
				// this.players.push({
				// 	Name : "007",
				// 	isRewarded : false,
				// 	rewardId : -1
				// }),
				// this.players.push({
				// 	Name : "eieiza",
				// 	isRewarded : false,
				// 	rewardId : -1
				// }),
				// this.players.push({
				// 	Name : "555+",
				// 	isRewarded : false,
				// 	rewardId : -1
				// })
	},
	filters:{
		isEmpty:function(value){
			// console.log(this.players);
			if(value == 'None'){
				return '-'
			}
			return value;
		}
	}

});


function OnClick(element){
	vue.getReward(element);
}
