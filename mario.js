
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height)
{	
	let hash = "#";
	for (let i = 0; i < height; i++)
	{
		let whiteSpace = " ";
		hash += "#";
		for (e = 0; e <= height-hash.length; e++)
		{
			whiteSpace += " ";
		}
		console.log(whiteSpace + hash);
	}
}
