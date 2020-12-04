# Jwatchのサービス概要
## 概要
Jリーグのスタジアム観戦情報を投稿＆閲覧出来るサイトです。  

https://jwatch-8411c.web.app/mainpage/index.html  

デプロイまで完了しておりますので閲覧していただけます。  
投稿機能,いいね機能等一部ログインが必要な機能がございますので*匿名ログイン*を使用していただければと思います。  

## 機能一覧
・文章の投稿機能  
・投稿の編集・削除機能  
・投稿の閲覧機能(条件検索)  
・通報機能  
・いいね機能  
・お問い合わせ機能  
・ログイン機能(Google,Twitter,匿名)  
・アカウント削除機能  
・管理者設定
・SNSシェア機能(Facebook,Twitter,LINE)  
・レスポンシブ対応(スマホ・タブレット対応)  

## 使用している技術一覧
■言語  
・HTML&CSS  
・JavaScript  
・Vue.js  

■データベース  
・Firebase(CloudFirestoreを使用)  

■コード管理  
・git/GitHub

## 作成過程
独学でWebサービスを作成しましたが、現役のエンジニアの方の助言も頂き、客観的な意見も取り入れつつ作成しました。(知識0の状態から半年で作成しました)  

まずは動くコードを書くことに専念しました。  
美しいコードや無駄のないコードを書くことももちろん大切です。  
ただ、私自身、半年前までコードを全く触ったことがなかったので、まずは動くものを作ってから、美しいコードや無駄のないコードに変えていく方(リファクタリング)が勉強効率がいいと考えました。  

## セキュリティールール
Cloud Firestoreは外部から書き込み読み取りが可能なので、セキュリティールールを設定して制限する必要があります。  
詳細なルールはJwatch/firestore.rulesに記載しております。  

## 作成理由
僕自身、サッカー観戦が大好きで全国のスタジアムを訪れるのですが、その中でスタジアムを実際に訪れないと分からないことが多すぎる現状に不便さを感じています。  

例えば、スタジアムの飲食店の質と量、トイレの混雑度合い、駐車場への入退場にかかる時間等がスタジアムごとに大きく異なることが挙げられます。  

もちろん試合内容も楽しみの一つですが、こういった試合観戦の環境を事前に理解することもサッカー観戦を楽しむために重要だと考えます。  

現状のWebサイトやSNSサービスでは、試合観戦情報だけではなく特定選手への評価、試合の感想等が入り乱れており、試合観戦情報だけを瞬時に得られるサービスはほぼありません。  

ですので、試合観戦情報をスタジアムごとに確認できるWebサービスがあれば便利だと思い、作成に至りました。  


## 今後どのようにWebサービスを広めたいか
アーリーアダプターとしてTwitterでJリーグ関連のツイートを行っているアカウントに接触していきます。  
ハッシュタグで(#Jwatchみたいに)ユーザーがつぶやいたこともWebページ上で見ることができるようになれば、投稿数が増えるので投稿するハードルが下がるのではないかと考えております。  

