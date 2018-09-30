function Tabs(selector) {
    this.elements = $(selector)
    this.elements.each(function (index, elements) {
        $(elements).children('.tabs-bar').children('li').eq(0).addClass('active')
        $(elements).children('.tabs-content').children('li').eq(0).addClass('active')
    })
    this.elements.on('click', '.tabs-bar > li', function (e) {
        var $li = $(e.currentTarget)
        $li.addClass('active').siblings().removeClass('active')
        var index = $li.index()
        var $content = $li.closest('.tabs').find('.tabs-content >li').eq(index)
        $content.addClass('active').siblings().removeClass('active')
    })
}

var tabs = new Tabs('.xxx')