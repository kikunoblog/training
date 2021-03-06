# ハンバーガボタンとメニューの作成
# 高さとスクロール問題の解決

1. ボタンを押したらメニューが右から左へでてくる  

ヘッダーにあるMENUの文字にカーソルを持って行ったら指マークに変わるようにCSSで設定し、MENUの文字をクリックしたら、そのクリックしたクラスに新しいクラス名が付くようにjQueryで設定して、right-100%にしていたメニューがright 0%になるようにcssで設定する。

かつ、transitionで少し時間をかけて右側から出てくるようにcssで設定することで右からスライドして出てくるように見えるようにする。そして、押されたMENUの部分は、右から出てきたサイドバーのメニューによって隠れる。そして、出てきたメニューの上の方でＭＥＮＵの文字があった箇所と同じ場所に「×」印をcssの擬似要素で付ける。


右から出てくるメニューはasideに設定する。classはsidebarとし、幅は８７．５％とする。
それから最前面に持っていきたいので、z-indexで優先的に一番上に持ってくるようcssで設定。
そして、右からメニューが出てきた際には、そのメニューを縦にスクロールが出来るように設定し、かつ背景である全体部分についてはスクロールをしないように固定する。スクロールバーが２本にならないように注意する。エラーが出やすいので、高さは固定値で設定しないようにする。


2. 同時に背景がふわっと浮かび上がる  

１と同じく、MENUの文字にカーソルを持って行ったら指マークに変わるようにcssで設定し、MENUの文字をクリックしたら、１とは違う別途新しいクラスが付くようjQueryで設定して、そのクラスに、背景がグレーのレイヤーが少し時間をかけて出てくるようにcssで設定する。グレーの背景は幅は全体の１００％分あるが、サイドから出てきたメニューの下に収まるため、メニューが出てきている部分は隠れて見えない状態となっている。

3. 閉じるボタンを押したらメニューが右の端っこへ収まる  

今は、１でクリックしたMENU部分が、メニューが右からスライドしてくることによって、見えなくなり、サイドバーにcssで設定した「×」が見えている状態である。１でクリックする場合と同じように、×部分をにカーソルを持っていったら同じく指マークに変わるようにcssで設定し、クリックすることによって、１でサイドから出てきてright:0%;となって開いていたメニューが、right:-100%;に戻るようcssで設定し、メニューが隠れ、クリックしていなかった時の状態に戻るようにする。


4. 同時に背景が消える  

３と同じく、×部分を押すことでグレーのレイヤーを消す。


# bodyの固定、クリックしたらサイドメニューがスライド・背景がグレー、サイドメニューのスクロール等、2021・12・01の段階で知ったこと・理解したこと
・GitHubのreadme.mdにメモを書く

・言語化することがとにかく大事

・細かい一つ一つを GitHub の issue にタスクとして書いていき、これ以上言語化できなくなるまで言語化して初めてコードを書く

・コードを書くときはブランチを作成するよう心がける

・ブランチ名には #1 という感じで issue 番号を入れる

・ブランチ名に #1 と書く場合はそのままではエラーが返ってくるので、 git checkout -b {#1} という形でブランチ名を半角の {} でくくる

・issue1から10まで作ってコードを書き、1が終わったら2にcheckoutして1をmerge。最終的にはmasterに移動→mergeして、ブランチを消して最後にgit push origin master

・ブランチ2で作成したコードがないとブランチ3が動かないとか、動くけど取り入れておきたいという場合は取り込みたいブランチ（3）で
git merge "#2"とすれば、自分でコードを改めて書かなくても、2のソースが3に取り込まれる→これがmerge

・お仕事の簡単な流れは、各ブランチで作業→終わったら main ブランチにマージ（案件だとほぼプルリクエスト→承認のフロー）→main で動作確認

・ボタンclickでメニュー開閉や背景グレーにしたい場合はjQueryよりまず先に言語化してcssでそのレイアウトをする

・画面全体をグレーにしたい場合は幅100％、高さ100％で設定

・例えば高さが100％にならない場合、「高さ　100％にならない」とかで検索するのではなく、「CSS　高さ　仕様」のように検索をする

・インライン要素にwidhtやheightは効かない

・vhは画面サイズに対しての割合、％は親要素に対しての割合

・親要素のheightが指定されていないと%指定は効かない

・高さに固定値は基本的に指定しない。色々不具合が発生するから。

・隙間を埋めたい時、そこだけ埋めることだけに囚われ過ぎないようにする。見えない部分に要素があっても構わないんだから。

・$("#cross").on("click", function(){ $("#cross").removeClass("open open2");});→言語化「id cross をクリックしたら id cross についているクラス open と open2 を削除」

実際に、もしhtmlに自分でopen と open2　クラスを記述してしまうと、clickイベントの状態が最初から怒ってる状態になってしまうので注意！

・JS は結局クラスをつける・外すを行うだけなのでCSSが出来てから考える
・JS の挙動と CSS の挙動は別々に考えて実装する

・他の場所でクラス名を使っているものが影響出ていそうなら、別のクラス名をつけて実装

・Gitについて例えばブランチ1番が一旦終わったら、master にプルリクエストをおくるなりしてマージして取り込み→1番のブランチは削除

・「ここがおかしい」→それを解消するためのブランチを新たに作成し解決用ブランチで作業→完了したらこちらも master にマージ→解決用ブランチを削除

・相手にGitを見てもらう為には、git push で最新情報を更新しないとだめ

・vh は viewport の高さなので、表示しているブラウザの高さに応じて勝手に計算してくれるもの

・viewportにも高さ指定は不要で、例えばブラウザの高さを自分で変えたら自動的に高さも持ってくれる

・子要素にいろいろテキストやらなんやら入れてって自動的に高さが出れば親は自動的にそれをカバーして高さを出す

・MENUをクリックしたらbodyにposition:fixed;を設定するみたいなこともjQueryで出来る

・パッと見て見える画面がブラウザの高さ

・スクロールするってことはブラウザの高さ以上に高さが出てるからスクロールする必要があるってこと

・サイドバーがブラウザの高さより高い時、全体に設定したはずの背景が画面全体にかかっていないように見える。その問題を解決するには、
　bodyにposition:fixedを設定し、サイドバー以外のbody全体をスクロールしても動かないようにして、サイドバーだけをスクロールすればよい
 
・relativeとabsoluteは親と子の関係だけでしか影響が出ない

・relative は子要素のためだけに存在しているのではない

・自分自身の場所をずらして表示したい場合は relative 単体で使う

・要素に幅と高さは常に意識する！

・bodyなど、通常、要素にはwidth:autoでデフォルト設定がされている。しかし、position:fixedやabsoluteのpositionの設定をすると
　要素が通常のフローから除外され、ページレイアウト内に要素のための空間が作成されなくなるため、bodyに幅や高さを設定しないと、
　body以下の子要素すべてが幅や高さを担保できなくなり、レイアウトがめちゃくちゃになっちゃうので注意！
 
・bodyにposition:fixedを設定して、width:100%も設定したら、サイドメニューなどの他の要素も含めて固定されてスクロールが全くできなくなる。これを解決するには、
　スクロールしたい要素に対して、height:100%とoverflow-y: scrollを設定すればその設定された要素はスクロールさせられるようになる。

・jQueryはまとめてかけるが、

$("#cross").on("click", function(){

$(".side .l-container").removeClass("move move2");});

という書き方は間違いで動作しない。別々に書けば動くがまとめるなら下記のようにする。

$("#cross").on("click", function(){

  $(".side").removeClass("move");
  
  $(".l-container").removeClass("move2");
  
});

・id セレクタは CSS の詳細度を高めるため、複雑化するリスクを招きやすい

・id セレクタを利用すると、スタイルの上書きが難しくなる

・id セレクタは同一ページで複数の要素に指定できないため、柔軟性を失う

・ jQueryをhtmlの中ではなく、別ファイルを作ってコーディングしていく場合、htmlの中にjQueryのリンクを貼らないといけない。たとえば下記のようなもの

  <script src="js/test.js"></script>　→　これは、htmlと同じ階層jsフォルダの中にあるtest.jsファイルにアクセスできるようにする（ちゃんと動くようにする）コード
  
  このコードは、jQuery本体を読み込むためのコードである下記のようなものの「上」に記載しないとjQueryが起動しないので超注意！

　<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>


