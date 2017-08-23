/**
 * Created by Arol on 23/08/2017.
 * http://arol.me
 */

/*==================
 RESPONSIVE VIDEO
 We are wrapping a div around any iframe that contain youtube or videmo url in case user want to add an iframe
 */
$("iframe[src*='youtube.com'], iframe[src*='vimeo.com']").wrap("<div class='videoWrapper'></div>");
