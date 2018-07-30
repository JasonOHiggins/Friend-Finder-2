
// $(document).ready(() => {
//     // A way of populating the questions that better lends itself to updating the questions.
//     [
//       "It's my way or the highway.",
//       "It's important to never make any mistakes whatsoever.",
//       "Questions of morality ultimately boil down to whatever benefits me the most at the time.",
//       "You rarely apologize.",
//       "People rarely rise to my standards of good conduct.",
//       "Pepsi is better than Coke.",
//       "To the victor go the spoils.",
//       "The apple doesn't fall far from the tree.",
//       "There is nothing more deceptive than an obvious fact. (Arthur Conan Doyle)",
//       "Energetic people frighten you."
//       ].forEach((question,idx) => {
//       let select = $(`<select class="chosen-select" id="q${idx+1}">`)
//       $(select).append(`<option value=""></option>`);
//       $(select).append(`<option value="${1}">${1} (Strongly Disagree)</option>`);
//       $(select).append(`<option value="${2}">${2}</option>`);
//       $(select).append(`<option value="${3}">${3}</option>`);
//       $(select).append(`<option value="${4}">${4}</option>`);
//       $(select).append(`<option value="${5}">${5} (Strongly Agree)</option>`);
//       $('#questionsGoHere').append($('<h3>').append(`<strong>Question ${idx+1}</strong>`));
//       $('#questionsGoHere').append(`<h4>${question}</h4>`);
//       $('#questionsGoHere').append($(select));
//     });
     
    
//     var config = {
//       ".chosen-select": {},
//       ".chosen-select-deselect": {
//         allow_single_deselect: true
//       },
//       ".chosen-select-no-single": {
//         disable_search_threshold: 10
//       },
//       ".chosen-select-no-results": {
//         no_results_text: "Oops, nothing found!"
//       },
//       ".chosen-select-width": {
//         width: "95%"
//       }
//     };
  
//     for (var selector in config) {
//       $(selector).chosen(config[selector]);
//     }
  
//     // Capture the form inputs
//     $("#submit").on("click", function (event) {
//       event.preventDefault();
  
//       // Form validation
//       function validateForm() {
//         var isValid = true;
//         $(".form-control").each(function () {
//           if ($(this).val() === "") {
//             isValid = false;
//           }
//         });
  
//         $(".chosen-select").each(function () {
  
//           if ($(this).val() === "") {
//             isValid = false;
//           }
//         });
//         return isValid;
//       }
  
//       // If all required fields are filled
//       if (validateForm()) {
//         // Create an object for the user"s data
//         var userData = {
//           name: $("#name").val(),
//           photo: $("#photo").val(),
//           scores: [
//             $("#q1").val(),
//             $("#q2").val(),
//             $("#q3").val(),
//             $("#q4").val(),
//             $("#q5").val(),
//             $("#q6").val(),
//             $("#q7").val(),
//             $("#q8").val(),
//             $("#q9").val(),
//             $("#q10").val()
//           ]
//         };
  
//         // AJAX post the data to the friends API.
//         $.post("/api/friends", userData, function (data) {
  
//           // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//           $("#match-name").text(data.name);
//           $("#match-img").attr("src", data.photo);
  
//           // Show modal with the best match
//           $("#results-modal").modal("toggle");
  
//         });
//       } else {
//         alert("Please fill out all fields before submitting!");
//       }
//     });
//     $("#randomize").on("click", function (event) {
//       event.preventDefault();
//       // Make a user with random scores for the lazy user.
//       const randomMe = {
//         name: "Joe Sixpack",
//         photo: "../images/random.jpg",
//         scores: []
//       };
//       for (let i = 0; i < 10; i++) { randomMe.scores.push(Math.floor(Math.random() * (4) + 1)) }
  
//       // Populate the inputs with the fake info.
//       $("#name").val(randomMe.name).trigger("chosen:updated");
//       $("#photo").val(randomMe.photo).trigger("chosen:updated");
  
//       randomMe.scores.forEach((score, idx) => {
//         $(`#q${idx + 1}`).val(score).trigger("chosen:updated");
//       });
  
//       // Trigger submit just as in non-random case.
//       $("#submit").trigger("click");
//     });
//   })