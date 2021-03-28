/*
given two strings, find if they are just one edit(insert, remove, replace) away from being identical.
*/
#include <iostream>
#include <vector>
#include <cstdlib>

using namespace std;

bool checkIfOneEditAway(string &a, string &b);

int main(){
    string a, b;
    bool isOneEditAway;
    cout << "Enter first string: \n";
    getline(cin, a);
    cout << "Enter second string: \n";
    getline(cin, b);
    isOneEditAway = checkIfOneEditAway(a, b);
    cout << (isOneEditAway ? "yes":"no") << endl; 
    return 0;
}

bool checkIfOneEditAway(string &a, string &b){
    /*
    what should be the considerations?
    check if of equal lengths. if yes, check if they have same sequence and no of characters.
    if no, then check for equality in sub_strings of each of the strings (arbitary locations)
    */
    int a_length = a.length(), b_length = b.length();
    int smaller_str_len = a_length > b_length ? b_length:a_length;
    int bigger_str_len = a_length > b_length ? a_length:b_length;

    char smaller_str = a_length > b_length ? 'b':'a';

    int counterI = 0;
    int counterJ = 0;
    string small = smaller_str == 'a' ? a: b;
    string big = smaller_str == 'a' ? b: a;
    int noOfEdits = 0;
    bool isOneEditAway = true;

    if(a_length == b_length){
        for(int i = 0; i < a_length; i++){
            if(a[i] != b[i]){
                noOfEdits++;
            }
        }
        isOneEditAway =  noOfEdits <= 1;
    }else if((abs(b_length - a_length) == 1)){
        while (counterI < smaller_str_len && counterJ < bigger_str_len)
        {   
             if(small[counterI] != big[counterJ]){
                ++noOfEdits;
                ++counterJ;
            }else{
                ++counterI;
                ++counterJ;
            }     
        }
        isOneEditAway = noOfEdits <= 1;
    }else{
        isOneEditAway = false;
    }

    return isOneEditAway;
};
