$(function () {

  var userMedia;
  var sortedTags;

  // This is @instagrames account ID, the instragrammer that
  // we're following for this coding assignment.
  var USER_ID = '200482';

  window.Instagram.getUser(USER_ID, function (data) {
    // Here you need to call the renderUserInfo() function.
    // As you guess from its name, it's used to render the user information on page.
    // Can you figure out what parameter you should to pass to it?
    // If you do things right you'll see the profile picture appear.

    // Mmm... what about the other user info? Go fix the renderUserInfo function!
  });

  window.Instagram.getUserRecentMedia(USER_ID, function (data) {
    // We'll need this userMedia later...
    userMedia = data;
    // Here we're rendering the user pictures. But something is not
    // ok in this function. Let's go there and fix it.
    renderUserMedia(data);

    // Now that our project starts to look fancy let's add a bit of extra
    // functionality to it. We'll show a list with all the user's hashtags.
    // This list should be sorted by frequency (number of appearances).
    // When the user clicks on a hashtag, we'll filter the pictures shown on page
    // to include only the ones that have that hashtag.

    // First we need to collect all the hashtags and sort them by frequency,
    // let's go to the function and fix it.
    sortedTags = evalHashtagFrequency(data);

    // Mmm... these are a lot of hashtags! Can you implement a function
    // that filters the array to include only the most relevant hashtags?
    // The function should take 2 arguments: (tagsArr, minFreq)
    // where tagsArr is the sorted array of hashtags, and minFreq
    // is a number representing the minimum frequency allowed.
    // It returns a new array of hastags with frequency equal or above the set limit.
    // Here replace sortedTags with the new filtered array.

    // Guess what? Another render function that is broken!
    // Let's go and fix it.
    renderSortedTags(sortedTags);
  });

  var evalHashtagFrequency = function (data) {
    // Here we create an object with all the hashtags as keys.
    // Then assign the value of every key to the frequency of that tag.
    var tags = {};
    data.forEach(function (media) {
      media.tags.forEach(function (tag) {
        if (tags[tag]) {
          tags[tag]++;
        } else {
          tags[tag] = 1;
        }
      });
    });

    // Here we transform this object into an array, so we'll be able to sort it.
    var sortable = [];
    for (var tag in tags) {
      sortable.push({
        tag: tag,
        frequency: tags[tag]
      });
    }

    // Finally we have to sort the array in descending order (higher frequencies first),
    // and return it. Check the "Array.prototype.sort()" docs, and
    // figure out how to create the right sort function.

  };

  var renderUserInfo = function (user) {
    // This is how the user profile picture is rendered.
    $('#user img').attr('src', user.profile_picture);

    // Now figure out how to render the remaining user information.
    // For example the h1 title should show the username. And the other fields
    // need to show the number of followers, follows, and posted images.

    // Once you're done here, take a look at the Instagram.getUserRecentMedia() callback.
  };

  var renderUserMedia = function (data) {
    // First of all we need to remove all the content of the .user-media div.
    // Btw, you might need to do something similar later in other functions,
    // and we're not going to mention it, it's up to you to figure out when!
    $('.user-media').html('');

    data.forEach(function (media) {
      // Let's create an empty div element with jQuery. In this div we'll show
      // a picture. Notice that since we're in a forEach "loop",
      // we're creating a div for every picture provided by the API.
      var div = $('<div>');

      // In order to nicely render this div, here you need to add
      // two CSS classes to it: "user-media-item" and "u-pull-left".
      // Figure out how to do it by digging into the jQuery docs.

      // We want to show all the pictures as squares, even when they originally
      // have round borders. For this we use a CSS technique that sets the picture
      // as the background image of the element (feel free to check the CSS rules
      // that have been set for ".user-media-item" if you're curious about it).
      // Now add the "background-image" CSS property to the div using jQuery
      // and assign the correct value to it.

      // Finally you have to append the div we just created into the
      // ".user-media" div. Notice that the jQuery append function
      // accepts other jQuery objects.

      // Ok, now go back and continue checking the code from where you left before
      // fixing this function. Btw, we're not going to mention this anymore,
      // as by now navigating code should look familiar to you.
    });
  };

  var renderSortedTags = function (data) {
    var tagList = $('.tag-list ul');

    // Let's iterate over all the tags in the list.
    data.forEach(function (tag) {
      // First, you need to create an empty "a" link tag with jQuery. Remember the div we
      // created earlier in this assignment? It should give you some inspiration.
      // Then fill this tag content with the hashtag itself and its frequency.

      // Now create a "li" tag and add the class "u-pull-left" to it.
      // In case you wonder this class is built-in in a CSS framework
      // we're using here: skeleton css (http://getskeleton.com/).
      // Then, add the "a" tag we just created to the "li" content.

      // Finally append the "li" to the tag list.
      tagList.append(li);

      // Now let's add a bit of action. We want the user to be able to filter the images
      // by clicking on the tags in the list. For this we need to bind the click event
      // on the "a" tag to the "clickTag" function we have here below.
      // When the user clicks on the link though, we need to know what tag he clicked on.
      // To makes things simpler, jQuery lets us save any extra data connected to elements.
      // For example the line below records an association between each "a" element (remember
      // we're in a "forEach" loop) and the tag they refer to.
      // We'll be using this in a moment inside the "clickTag" function.
      a.data('tag', tag);
      // Here you need to bind the click event of the "a" tag to the "clickTag" function.
      // Then, go to the function declaration to fix it.

    });
  };

  var clickTag = function (e) {
    // This is a handler function that is bound to the click event. jQuery will call this function,
    // passing the event information, when one of the links we prepared before is clicked.
    // The event information (you could name it as you wish, "e" is just a shortcut for "event")
    // among other data contains the target: the link that was clicked. So, we can cast
    // the HTML element that was clicked into a jQuery object by doing the following.
    var link = $(e.target);

    // Now we can retrieve the tag data stored in it.
    var tag = link.data('tag').tag;

    // Once we know what tag the user clicked, we can filter the images. You need to create
    // a function that returns an array containing only images with a certain tag.

    // Ok, finally you can re-render the filtered media here!

  };

});
