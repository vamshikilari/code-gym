#include <iostream>
#include <string>

using namespace std;

void urlify(string &a);

int main(){
    cout << "Enter string to urlify: \n";
    string a;
    getline(cin, a);
    urlify(a);
    cout << "Urlified string: " << a << endl;
    return 0;
}

void urlify(string &a){

    int str_length = a.length();
    int numOfSpaces = 0;
    int i = 0, j = 0;
    
    for(i=0; i<str_length; ++i){
        if(isspace(a[i])){
            numOfSpaces++;
        }
    }

    int extendedLength = str_length + 2 * numOfSpaces;

    a.resize(extendedLength);

    i = extendedLength - 1;

    for(j=str_length-1; j >= 0; --j){      
        if(isspace(a[j])){
            a[i--] = '0';
            a[i--] = '2';
            a[i--] = '%';
        }else{
            a[i--] = a[j];
        }
    }
}