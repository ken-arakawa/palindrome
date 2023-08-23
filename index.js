module.exports = Phrase;

// reverse()メソッドを定義して全てのStringで使えるようにする
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
    this.content = content;

    // パリンドロームのテスト用に変換したcontentを返す
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // コンテンツの文字だけを返す
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }

    // パリンドロームならtrueを、違うならfalseを返す
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}