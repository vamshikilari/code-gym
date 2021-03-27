#include <iostream>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

bool check_if_palindrome_permutation(string &a);

int main() {
    string a;
    cout << "Enter sentence or word to check if it is a permutation of a palindrome \n";
    getline(cin, a);
    bool is_true = check_if_palindrome_permutation(a);
    cout << (is_true ? "Is a palindrome permutation": "Not a palindrome permutation") << endl;
    return 0;
}

bool check_if_palindrome_permutation(string &a){
    unordered_map<char, int> char_map;
    int str_length = a.length();
    int counter = 0;

    while(counter < str_length){
        if(char_map.find(a[counter]) != char_map.end()){
            char_map.insert(pair<char, int> (a[counter], ++char_map[a[counter]]));
        }else{
            char_map.insert(pair<char, int> (a[counter], 1));
        }
        counter++;
    }

    int map_size = char_map.size();

    bool is_even = map_size % 2 == 0;
    bool is_true = false;
    int oddCounter = 0; 

    unordered_map<char, int>::iterator it;

    for(it=char_map.begin(); it != char_map.end(); it++) {
        cout << it->first << it->second << endl;
        if(is_even && it->second % 2 == 0){
            is_true = true;
        }else if(!is_even && it->second % 2 == 0){
            is_true = true;
        }else if(!is_even && oddCounter == 0 && it->second % 2 == 1){
            oddCounter++;
            is_true = true;
        }else{
            is_true = false;
        }
    }

    return is_true;
}