$(function () {
    $("#main").textTagger("Lorem ipsum dolor sit amet, sit lacus vestibulum vel platea aliquam. " +
    "Id consectetuer auctor viverra ac orci, repellat cursus in morbi est. " +
    "Pretium erat tellus nunc etiam, ac justo. In non ac ornare sed, volutpat ipsum nunc velit. " +
    "Diam hac quis vestibulum magna fermentum, et erat volutpat et placerat ut id, vitae nulla vestibulum non nisl est, " +
    "tristique fringilla vehicula mauris est.", ['Organization', 'Person', 'Policy', 'Location', 'Product'], function (userTaggedResult) {
        console.log(userTaggedResult);
    })
})