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