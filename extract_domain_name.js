/**
 * URL:https://www.codewars.com/kata/514a024011ea4fb54200004b
 * Description:

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"


 * 
 */

function domainName(url){
    const regex = /(?:https?:\/\/)?(?:www\.)?([\w-]+)\./i;
    return url.match(regex)[url.match(regex).length-1];
}