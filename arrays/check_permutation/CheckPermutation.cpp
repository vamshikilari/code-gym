#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

bool check_if_permutations(string &one, string &two);

int main()
{
    string one, two;
    cout << "Enter input 1 \n";
    getline(cin, one);
    cout << "Enter input 2 \n";
    getline(cin, two);
    bool is_a_permutation = check_if_permutations(one, two);
    cout << (is_a_permutation ? "Given strings are permutations" : "Given strings are not permutations");
    return 0;
}

bool check_if_permutations(string &one, string &two)
{
    // loop over two strings and generate an object1, object2
    /*
    condition 1: must have exact length
    condition 2: must have same no of char instances
    finally: check the hash_map for those instances, and equality
    */
    int length_str_1 = one.length();
    int length_str_2 = two.length();

    unordered_map<char, int> map_1;
    unordered_map<char, int> map_2;

    if (length_str_1 != length_str_2)
    {
        return false;
    }

    for (int i = 0; i < length_str_1; ++i)
    {
        if (map_1.find(one[i]) != map_1.end())
        {
            map_1.insert(pair<char &, int>(one[i], ++map_1[one[i]]));
        }
        else
        {
            map_1.insert(pair<char &, int>(one[i], 1));
        }
        if (map_2.find(two[i]) != map_2.end())
        {
            map_2.insert(pair<char &, int>(two[i], ++map_2[two[i]]));
        }
        else
        {
            map_2.insert(pair<char &, int>(two[i], 1));
        }
    }

    unordered_map<char, int>::iterator p;

    bool is_permutation = true;

    for (p = map_1.begin(); p != map_1.end(); p++)
    {
        if (p->second != map_2[p->first])
        {
            is_permutation = false;
        }
    }

    return is_permutation;
}