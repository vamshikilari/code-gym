#include <iostream>
#include <string>

using namespace std;

bool check_if_unique(string &a);

int main()
{
    string a;
    cout << "Enter string to check for unique characters \n";
    getline(cin, a);
    bool is_unique = check_if_unique(a);
    cout << (is_unique ? "Given string is having unique characters" : "Given string is not having unique characters") << endl;
    return 0;
}

bool check_if_unique(string &a)
{
    int str_length = a.length();
    bool is_unique = true;

    // \__(. .)__/ O(n2) for now, because space constranit in question (hash_map can do in O(n))
    for (int i = 0; i < str_length; i++)
    {
        char current_char = a[i];
        for (int j = i + 1; j < str_length; j++)
        {
            char compare_char = a[j];
            if (current_char == compare_char)
            {
                is_unique = false;
            }
        }
    }

    return is_unique;
}